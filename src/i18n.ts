import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales } from './navigation'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as LocaleParams)) notFound()

  return {
    messages: (await import(`./locales/${locale}.json`)).default
  }
})
