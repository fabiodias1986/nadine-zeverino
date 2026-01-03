import { MetadataRoute } from 'next'

const locales = ['en', 'pt', 'nl']
const baseUrl = 'https://www.nadinezeverino.com'

// Suas páginas estáticas
const pages = [
  '',
  '/about',
  '/contact',
  '/practice-areas',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []

  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${page}`])
          ),
        },
      })
    })
  })

  return sitemap
}