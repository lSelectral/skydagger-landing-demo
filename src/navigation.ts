import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { Pathnames } from 'next-intl/routing'

export const locales = ['en', 'tr'] as const
export const localePrefix = 'always' as const // Default
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/tr': 'tr',
  '/en': 'en',
  '/:path*': 'en',
  '/(tr|en)/:path*': 'en'
} as const

export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames
})
