const fs = require('fs');
const path = require('path');

const dir = 'messages/';

// Fix EN - LegalPoint hero title
let en = fs.readFileSync(dir + 'en.json', 'utf8');
en = en.replace('"Legal Excellence in Portugal"', '"Secure Property Investment & Legal Representation in Portugal"');
// Fix EN - Step 4
en = en.replace(
  '"desc": "We execute the transaction and hand over the keys and documents."',
  '"desc": "We execute the transaction securely via Power of Attorney and arrange the legal transfer of your assets, without you needing to travel."'
);
fs.writeFileSync(dir + 'en.json', en, 'utf8');
console.log('en.json done');

// Fix PT - LegalPoint hero title
let pt = fs.readFileSync(dir + 'pt.json', 'utf8');
pt = pt.replace('"Excel\u00eancia Jur\u00eddica em Portugal"', '"Investimento Seguro e Representa\u00e7\u00e3o Legal em Portugal"');
// Fix PT - Step 4
pt = pt.replace(
  '"desc": "Executamos a transa\u00e7\u00e3o e entregamos as chaves e documentos."',
  '"desc": "Executamos a transa\u00e7\u00e3o de forma segura por Procura\u00e7\u00e3o e tratamos da transfer\u00eancia legal dos seus ativos, sem que necessite de viajar."'
);
fs.writeFileSync(dir + 'pt.json', pt, 'utf8');
console.log('pt.json done');

// Fix NL - LegalPoint hero title
let nl = fs.readFileSync(dir + 'nl.json', 'utf8');
nl = nl.replace('"Juridische Excellentie in Portugal"', '"Veilige Vastgoedinvestering & Juridische Vertegenwoordiging in Portugal"');
// Fix NL - Step 4
nl = nl.replace(
  '"desc": "We voeren de transactie uit en overhandigen de sleutels en documenten."',
  '"desc": "We voeren de transactie veilig uit via Volmacht en regelen de juridische overdracht van uw activa, zonder dat u hoeft te reizen."'
);
fs.writeFileSync(dir + 'nl.json', nl, 'utf8');
console.log('nl.json done');