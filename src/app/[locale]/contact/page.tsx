import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

type Props = {
  params: {
    locale: LocaleParams
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({
    locale,
    namespace: 'pages.contact.metadata'
  })
  const title = t(`title`, { companyName: 'Skydagger' })
  const description = t(`description`, { companyName: 'Skydagger' })

  return {
    title: title,
    description: description
  }
}

export default function ContactPage({ params: { locale } }: Props) {
  return (
    <div className='flex min-h-screen flex-col items-center bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0F0F0F] p-4 pt-20 text-white'>
      <div className='w-full max-w-4xl'>
        <div className='mb-8 text-center'>
          <Image src='/logo.png' alt='SKYDAGGER Logo' width={200} height={100} className='mx-auto mb-4' />
          <h1 className='mb-2 text-3xl font-bold'>Contact Us</h1>
          <p className='text-gray-400'>Get in touch with SKYDAGGER INTERNATIONAL</p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>Contact Information</h2>
            <ul className='space-y-2'>
              <li>
                <strong>Email:</strong> info@skydagger.com
              </li>
              <li>
                <strong>Ukraine Office:</strong>
                <br />
                Email: ukraine@skydagger.com
                <br />
                Location: Kiev
              </li>
            </ul>
          </div>

          <div>
            <h2 className='mb-4 text-xl font-semibold'>Send us a message</h2>
            <form id='contact-form' className='space-y-4'>
              <Input required type='text' placeholder='Your Name' className='h-14 bg-white/10' />
              <Input required type='email' placeholder='Your Email' className='h-14 bg-white/10' />
              <Textarea required placeholder='Your Message' className='bg-white/10' />
              <Button form='contact-form' type='submit' className='w-full'>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
