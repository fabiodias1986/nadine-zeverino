/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nadinezeverino.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.8,
  exclude: ['/api/*', '/admin/*'],
  
  // Se usar i18n, adicione os locales
  // Ex: se tem /pt, /en, /es
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}