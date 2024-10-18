import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang='tr'>
      <body>
        <div className='flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6'>
          <div className='space-x-2 pb-8 pt-6 md:space-y-5'>
            <h1 className='md:leading-14 text-6xl font-extrabold leading-9 tracking-tight text-gray-100 md:border-r-2 md:px-6 md:text-8xl'>
              404
            </h1>
          </div>
          <div className='max-w-md'>
            <p className='mb-4 text-xl font-bold leading-normal text-gray-400 md:text-2xl'>
              Üzgünüz, aradığınız sayfayı bulamadık.
            </p>
            <p className='mb-8 text-gray-500'>
              Fakat endişelenmeyin, aşağıdaki butona tıklayarak ana sayfaya dönebilirsiniz.
            </p>
            <Link
              href='/'
              className='focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500'
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
