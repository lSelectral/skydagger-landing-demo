import { appConsts } from '@/consts/appConsts'
import { MetadataRoute } from 'next'

const BASE_URL = appConsts.BASE_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const languages = ['en', 'tr']
  const localizedRoutes = (): MetadataRoute.Sitemap => {
    const routes = ['', '/about', 'products', 'contact']

    return routes.map(route => {
      return {
        url: `${BASE_URL}/${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'daily',
        priority: 0.7,
        alternates: {
          languages: languages.reduce((acc, lang) => {
            lang = `${BASE_URL}/${lang}/${route}`

            return acc
          }, {})
        }
      }
    })
  }

  return [...localizedRoutes()]
}
