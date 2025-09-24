import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

// Função para carregar mensagens de um locale específico
async function loadMessages(locale: string) {
  try {
    const filePath = join(process.cwd(), 'messages', `${locale}.json`);
    const fileContents = readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Erro ao carregar mensagens para locale ${locale}:`, error);
    // Carregar fallback (português)
    try {
      const filePath = join(process.cwd(), 'messages', 'pt.json');
      const fileContents = readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    } catch {
      return {}; // Retornar objeto vazio se falhar
    }
  }
}

// Função para detectar o locale do cabeçalho
function getLocaleFromHeaders(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const locales = ['pt', 'en', 'fr', 'es', 'de'];
    for (const locale of locales) {
      if (acceptLanguage.includes(locale)) {
        return locale;
      }
    }
  }
  return 'pt'; // fallback para português
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, subject, message } = body;
    
    // Detectar locale do cabeçalho ou usar fallback
    const locale = getLocaleFromHeaders(request);
    
    // Carregar mensagens para o locale
    const messages = await loadMessages(locale);
    
    // Validar campos obrigatórios
    if (!name || !email || !subject || !message) {
      const errorMessage = messages?.Api?.contact?.missingFields || 'Todos os campos obrigatórios devem ser preenchidos';
      return new Response(
        JSON.stringify({ error: errorMessage }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Criar transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    // Obter mensagens traduzidas
    const emailSubject = messages?.Email?.contactSubject || 'Contato Site - {{subject}}';
    const emailTitle = messages?.Email?.contactTitle || 'Nova mensagem de contato';
    const emailFields = messages?.Email?.fields || {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      subject: 'Assunto',
      message: 'Mensagem',
      notProvided: 'Não informado'
    };
    
    // Enviar email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: emailSubject.replace('{{subject}}', subject),
      text: `
        ${emailTitle}:
        
        ${emailFields.name}: ${name}
        ${emailFields.email}: ${email}
        ${emailFields.phone}: ${phone || emailFields.notProvided}
        ${emailFields.subject}: ${subject}
        
        ${emailFields.message}:
        ${message}
      `,
      html: `
        <h2>${emailTitle}</h2>
        <p><strong>${emailFields.name}:</strong> ${name}</p>
        <p><strong>${emailFields.email}:</strong> ${email}</p>
        <p><strong>${emailFields.phone}:</strong> ${phone || emailFields.notProvided}</p>
        <p><strong>${emailFields.subject}:</strong> ${subject}</p>
        <p><strong>${emailFields.message}:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    // Mensagem de sucesso traduzida
    const successMessage = messages?.Api?.contact?.success || 'Mensagem enviada com sucesso!';
    
    return new Response(
      JSON.stringify({ message: successMessage }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Tentar carregar mensagem de erro traduzida
    let locale = 'pt';
    try {
      locale = getLocaleFromHeaders(new NextRequest(request.url, { headers: request.headers }));
    } catch {}
    
    const messages = await loadMessages(locale);
    const errorMessage = messages?.Api?.contact?.serverError || 'Erro interno do servidor';
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}