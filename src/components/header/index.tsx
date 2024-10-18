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
import { useState } from 'react'
import MenuItem from '../MenuItem'
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
    {
      name: 'Ürünler',
      subLinks: [
        { name: 'Drone', href: '/products/drone' },
        { name: 'Akseuarlar', href: '/products/accessories' },
        { name: 'Kameralar', href: '/products/cameras' }
      ]
    },
    { name: 'İletişim', href: '/contact' }
  ]

  const currentPath = usePathname()
  const currentLocale = useLocale()

  return (
    <header className='sticky top-0 z-20 w-full bg-[#2F2F30] drop-shadow-lg'>
      <nav className='container mx-auto flex items-center justify-between p-4 py-2'>
        <Link href='/'>
          <CustomImage src='/logo.png' alt='Logo' className='w-96 max-md:w-80' />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden gap-10 font-medium text-white lg:flex'>
          {menuLinks.map(link => (
            <MenuItem key={link.name} name={link.name} href={link.href} subLinks={link.subLinks} />
          ))}
          {/* Languages */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='flex items-center gap-2'>
                <Flag languageIsEn={currentLocale === 'en'} />
                <span className=''>{currentLocale === 'en' ? 'English' : 'Türkçe'}</span>
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
            'fixed right-0 top-0 flex h-screen w-1/3 origin-right transform flex-col justify-between rounded-3xl bg-[#2F2F30] p-6 pl-3 transition-transform duration-300 lg:hidden',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full scale-x-0'
          )}
        >
          <div className='flex flex-col gap-4'>
            <button className='self-end text-white' onClick={() => setMobileMenuOpen(false)}>
              <X size={30} />
            </button>

            <div className='h-0.5 bg-gradient-to-r from-sky-400 to-sky-500' />

            {menuLinks.map((link, index) =>
              link.subLinks ? (
                // Show Ürünler. Then with indent show subLinks
                <div key={index} className='flex flex-col gap-2'>
                  <span className='text-lg text-gray-400'>{link.name}</span>
                  <div className='pl-4'>
                    {link.subLinks.map(subLink => (
                      <Link key={subLink.name} href={subLink.href} onClick={() => setMobileMenuOpen(false)}>
                        <span
                          className={cn(
                            'block text-lg text-white',
                            currentPath === subLink.href ? 'font-bold text-sky-400' : ''
                          )}
                        >
                          - {subLink.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={index} href={link.href ?? '/'} onClick={() => setMobileMenuOpen(false)}>
                  <span
                    className={cn(
                      'block text-lg text-white',
                      currentPath === link.href ? 'font-bold text-sky-400' : ''
                    )}
                  >
                    {link.name}
                  </span>
                </Link>
              )
            )}

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

          <CustomImage src='/logo.png' alt='Logo' height='auto' className='w-full self-end px-4' />
        </div>
      </nav>
    </header>
  )
}

export default Header
