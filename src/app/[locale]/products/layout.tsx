import React from 'react'

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen bg-[#2F2E33]'>
      <div className='flex size-full flex-col'>{children}</div>
    </main>
  )
}
