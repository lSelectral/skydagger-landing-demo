'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Link, locales, usePathname } from '@/navigation'
import { MenuIcon, X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'
import CustomImage from '../image'

const Flag = ({ languageIsEn }: { languageIsEn: boolean }) => (
  <CustomImage
    src={`/flags/${languageIsEn ? 'en' : 'tr'}.svg`}
    alt={languageIsEn ? 'English' : 'Turkish'}
    width={20}
    height={20}
  />
)

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // State to control mobile menu visibility
  const t = useTranslations()
  const menuLinks = [
    { name: t('Header.navItems.main'), href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Ürünler', href: '/products' },
    { name: 'İletişim', href: '/contact' }
  ]

  const currentPath = usePathname()
  const currentLocale = useLocale()

  return (
    <header className='sticky top-0 z-50 bg-[#2F2F30] drop-shadow-lg'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <Link href='/'>
          <CustomImage src='/logo.png' alt='Logo' className='w-96 max-md:w-80' />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden gap-10 font-medium uppercase text-white lg:flex'>
          {menuLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          ))}
          {/* Languages */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='flex items-center gap-2'>
                <Flag languageIsEn={currentLocale === 'en'} />
                <span className='uppercase'>{currentLocale === 'en' ? 'English' : 'Türkçe'}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={8}>
              <DropdownMenuRadioGroup value={currentLocale}>
                {locales.map(locale => (
                  <Link key={locale} href={currentPath} locale={locale}>
                    <DropdownMenuRadioItem value={locale} className='flex items-center gap-2 text-lg'>
                      <Flag languageIsEn={locale === 'en'} />
                      <span>{locale === 'en' ? 'English' : 'Türkçe'}</span>
                    </DropdownMenuRadioItem>
                  </Link>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button className='text-white lg:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={30} /> : <MenuIcon size={30} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed right-0 top-0 h-screen w-1/3 origin-right transform rounded-3xl bg-[#2F2F30] p-6 pl-3 transition-transform duration-300 lg:hidden',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full scale-x-0'
          )}
        >
          <div className='flex flex-col gap-4'>
            <button className='self-end text-white' onClick={() => setMobileMenuOpen(false)}>
              <X size={30} />
            </button>

            {menuLinks.map((link, index) => (
              <Link key={index} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                <span className='block text-lg text-white'>{link.name}</span>
              </Link>
            ))}

            {/* Languages */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className='flex items-center gap-2'>
                  <Flag languageIsEn={currentLocale === 'en'} />
                  <span className='uppercase text-white'>{currentLocale === 'en' ? 'English' : 'Türkçe'}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={8}>
                <DropdownMenuRadioGroup value={currentLocale}>
                  {locales.map(locale => (
                    <Link key={locale} href={currentPath} locale={locale}>
                      <DropdownMenuRadioItem value={locale} className='flex items-center gap-2 text-lg'>
                        <Flag languageIsEn={locale === 'en'} />
                        <span>{locale === 'en' ? 'English' : 'Türkçe'}</span>
                      </DropdownMenuRadioItem>
                    </Link>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
