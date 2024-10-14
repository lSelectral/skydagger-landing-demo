import { ThemeProvider } from '@/components/theme-provider'
import { locales } from '@/navigation'
import Header from '@/components/header'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'
import Footer from '@/components/footer'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode
  params: {
    locale: LocaleParams
  }
}>

async function getMessages(locale: LocaleParams) {
  return (await import(`@/locales/${locale}.json`)).default
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages(locale)
  unstable_setRequestLocale(locale)

  return (
    <html className={poppins.className} lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
