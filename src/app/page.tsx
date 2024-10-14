'use client'

import { redirect } from 'next/navigation'

export default function RootPage() {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    const queryParams = new URLSearchParams(window.location.search)
    const lang = navigator.language

    // if (lang?.startsWith('tr')) return redirect('/tr')

    // Redirect with query params
    if (lang?.startsWith('tr')) {
      return redirect(`/tr?${queryParams?.toString()}`)
    }

    return redirect(`/en?${queryParams?.toString()}`)
  }

  return redirect('/en')
}
