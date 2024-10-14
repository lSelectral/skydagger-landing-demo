'use client'
import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    setTheme(theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className={cn(
            'border-primary bg-background text-primary hover:bg-primary/90 dark:border-primary-dark dark:bg-background-dark dark:text-primary-dark dark:hover:bg-primary-dark/90',
            className
          )}
        >
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => handleThemeChange('light')} className='flex items-center justify-between'>
          Light
          {theme === 'light' && <Sun className='h-4 w-4' />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')} className='flex items-center justify-between'>
          Dark
          {theme === 'dark' && <Moon className='h-4 w-4' />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('system')} className='flex items-center justify-between'>
          System
          {theme === 'system' && <Moon className='h-4 w-4' />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
