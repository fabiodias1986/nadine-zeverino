import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, locale } = await request.json();

    const apiToken = process.env.MAILERLITE_API_TOKEN;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiToken || apiToken === 'your_mailerlite_api_token_here') {
      console.warn('MailerLite API Token is not configured in the environment variables (.env). Skipping API integration.');
      return NextResponse.json({ 
        success: true, 
        message: 'MailerLite integration bypassed: Token not configured in .env file.' 
      });
    }

    // Split first and last name if possible
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // MailerLite payload structure
    const payload: {
      email: string;
      fields: {
        name: string;
        last_name: string;
        phone: string;
      };
      status: string;
      groups?: string[];
    } = {
      email: email.trim(),
      fields: {
        name: firstName,
        last_name: lastName,
        phone: phone.trim().replace(/\s+/g, ''), // clean phone spaces
      },
      status: 'active'
    };

    // If a group ID is configured, add subscriber directly to that group
    if (groupId && groupId.trim() !== '') {
      payload.groups = [groupId.trim()];
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiToken}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MailerLite API Error:', errorText);
      return NextResponse.json({ 
        success: false, 
        error: 'MailerLite API returned an error status: ' + response.status 
      });
    }

    const data = await response.json();

    // 2. Dispatch email notification to Nadine using nodemailer
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || '185.118.115.31',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${process.env.SMTP_USER}" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'contact@nadinezeverino.com',
        subject: `Novo Lead Ebook - ${name}`,
        text: `
          Novo Lead - Descarregou o Ebook / Guia PDF:

          Nome: ${name}
          Email: ${email}
          Telefone: ${phone}
          Idioma/Origem: ${locale?.toUpperCase() || 'PT'}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #C5A065; border-bottom: 2px solid #C5A065; padding-bottom: 10px; font-family: serif; font-weight: normal;">Novo Lead Captado!</h2>
            <p>Um novo utilizador descarregou o Ebook/Guia sobre Aquisição de Imóveis em Portugal.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Nome:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #C5A065; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #C5A065; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Idioma/Origem:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-transform: uppercase;">${locale || 'pt'}</td>
              </tr>
            </table>
            
            <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
              Este lead foi registado e enviado para a sua conta do MailerLite.
            </p>
          </div>
        `
      });
    } catch (mailError) {
      console.error('Error sending lead notification email to Nadine:', mailError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('MailerLite route error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
