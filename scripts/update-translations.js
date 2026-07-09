const fs = require('fs');

['en.json', 'pt.json', 'nl.json'].forEach(f => {
  const p = 'messages/' + f;
  let c = fs.readFileSync(p, 'utf8');
  const original = c;

  // Only modify within LegalPoint namespace - never touch root Hero

  // English: step4 desc
  c = c.replace(
    '      "step4": {\n        "title": "Deal Completion",\n        "desc": "We execute the transaction and hand over the keys and documents."',
    '      "step4": {\n        "title": "Deal Completion",\n        "desc": "We execute the transaction securely via Power of Attorney and arrange the legal transfer of your assets, without you needing to travel."'
  );

  // Portuguese: step4 desc
  c = c.replace(
    '      "step4": {\n        "title": "Conclus\u00e3o do Neg\u00f3cio",\n        "desc": "Executamos a transa\u00e7\u00e3o e entregamos as chaves e documentos."',
    '      "step4": {\n        "title": "Conclus\u00e3o do Neg\u00f3cio",\n        "desc": "Executamos a transa\u00e7\u00e3o de forma segura por Procura\u00e7\u00e3o e tratamos da transfer\u00eancia legal dos seus ativos, sem que necessite de viajar."'
  );

  // Dutch: step4 desc
  c = c.replace(
    '      "step4": {\n        "title": "Afronding van de Deal",\n        "desc": "We voeren de transactie uit en overhandigen de sleutels en documenten."',
    '      "step4": {\n        "title": "Afronding van de Deal",\n        "desc": "We voeren de transactie veilig uit via Volmacht en regelen de juridische overdracht van uw activa, zonder dat u hoeft te reizen."'
  );

  // English: LegalPoint Hero title (only ONE match for "Legal Excellence in Portugal")
  c = c.replace('"Legal Excellence in Portugal"', '"Secure Property Investment & Legal Representation in Portugal"');

  // Portuguese: LegalPoint Hero title
  c = c.replace('"Excel\u00eancia Jur\u00eddica em Portugal"', '"Investimento Seguro e Representa\u00e7\u00e3o Legal em Portugal"');

  // Dutch: LegalPoint Hero title
  c = c.replace('"Juridische Excellentie in Portugal"', '"Veilige Vastgoedinvestering & Juridische Vertegenwoordiging in Portugal"');

  if (c !== original) {
    fs.writeFileSync(p, c, 'utf8');
    console.log(f + ': CHANGED');
  } else {
    console.log(f + ': NO CHANGES');
  }
});