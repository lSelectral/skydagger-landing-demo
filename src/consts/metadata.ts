import { Metadata, Viewport } from 'next'

const viewportData: Viewport = {
  themeColor: '#2F2E33',
  colorScheme: 'dark',
  initialScale: 1,
  width: 'device-width'
}

const metadataData: Metadata = {
  title: 'SKYDAGGER',
  description: 'SKYDAGGER - Gelecek sen hayal ettiğin gibi. Taktiksel Drone, Kamera ve Aksesuarlar',
  keywords: 'SKYDAGGER, Drone, Kamera, Aksesuarlar, Taktiksel Drone, Drone Kamera, Drone Aksesuarlar',

  verification: {
    // google: ''
  },
  robots: {
    googleBot: 'index, follow',
    follow: true,
    index: true,
    notranslate: true
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'shortcut icon', url: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '152x152' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '120x120' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '76x76' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '60x60' },
    { rel: 'icon', url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    { rel: 'icon', url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
    { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
    { rel: 'msapplication-TileImage', url: '/mstile-150x150.png', sizes: '150x150' },
    { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#e6411c' }
  ],
  applicationName: 'SKYDAGGER',
  creator: 'SKYDAGGER',
  publisher: 'SKYDAGGER',
  openGraph: {
    type: 'website',
    countryName: 'Turkey',
    siteName: 'SKYDAGGER',
    url: 'https://prep-test.com',
    title: 'SKYDAGGER',
    description: 'SKYDAGGER - Gelecek sen hayal ettiğin gibi. Taktiksel Drone, Kamera ve Aksesuarlar',
    locale: 'en_US',
    alternateLocale: ['tr_TR', 'en_US'],
    emails: 'info@skydagger.com'
    // images: {
    //   url: 'https://prep-test.com/assets/logo-192.png',
    //   alt: 'PREP TEST LOGO',
    //   width: '300',
    //   height: '180'
    // }
  }
  //   twitter: {
  //     card: 'summary_large_image',
  //     title: 'PREP TEST',
  //     description: 'PREP TEST - Next generation AI Powered education platform',
  //     creator: '@preptest',
  //     site: 'https://prep-test.com',
  //     siteId: 'prep-test',
  //     images: {
  //       url: 'https://prep-test.com/assets/logo-192.png',
  //       alt: '@preptest',
  //       width: '1200',
  //       height: '630'
  //     }
  //   }
}

export { metadataData, viewportData }
