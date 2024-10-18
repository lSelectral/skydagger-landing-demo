import { appConsts } from '@/consts/appConsts'
import { Target, Zap } from 'lucide-react'
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
    namespace: 'pages.about.metadata'
  })
  const title = t(`title`, { companyName: appConsts.COMPANY_NAME })
  const description = t(`description`, { companyName: appConsts.COMPANY_NAME })

  return {
    title: title,
    description: description
  }
}

export default function Hakkimizda({ params: { locale } }: Props) {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0F0F0F] text-gray-200'>
      <div className='container mx-auto px-4 py-16'>
        <div className='mb-12 flex justify-center'>
          <Image
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-irqJ5Eftsjf4slyKOCF8c5ivwpMU4A.png'
            alt='Skydagger Logo'
            width={300}
            height={60}
            className='h-16 w-auto'
          />
        </div>

        <h1 className='mb-8 text-center text-4xl font-bold text-white'>Hakkımızda</h1>
        <h2 className='mb-12 text-center text-2xl font-semibold text-blue-400'>
          Skydagger Drones: Yenilik ve Güvenliğin Simgesi
        </h2>

        <div className='mb-16 grid items-center gap-12 md:grid-cols-2'>
          <div>
            <p className='mb-4'>
              Skydagger Drones, 2024 yılında kurulan bir taktiksel drone teknolojisi şirketidir. Savunma sanayindeki
              benzersiz uzmanlığımızla, üst düzey bilgi teknolojileri alanında katma değerli mühendislik çözümleri
              sunuyoruz. Disiplinlerarası entegrasyon kültürümüzle bilişim, yazılım ve sistem entegrasyon
              çalışmalarımızı, müşteri fayda analizi doğrultusunda gerçekleştiriyoruz.
            </p>
          </div>
          <div className='flex justify-center'>
            <Image
              src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-YYHJWIRXJ5l0A2NkM8DywKNcbZSowH.png'
              alt='Skydagger Drone'
              width={500}
              height={300}
              className='h-auto w-full rounded-lg shadow-lg'
            />
          </div>
        </div>

        <div className='my-12 h-px bg-gray-700'></div>

        <div className='mb-16'>
          <h3 className='mb-6 text-center text-2xl font-semibold text-white'>Vizyonumuz ve Misyonumuz</h3>
          <div className='grid gap-12 md:grid-cols-2'>
            <div className='rounded-lg border border-gray-700 bg-gray-900 bg-opacity-50 p-6'>
              <h4 className='mb-4 flex items-center text-xl font-semibold text-blue-400'>
                <Target className='mr-2' /> Vizyonumuz
              </h4>
              <p>
                Skydagger Drones, başta Türkiye olmak üzere tüm dünya için faydalı, katma değerli taktiksel drone
                teknolojileri ve çözümleri sunmayı vizyon edinmiştir.
              </p>
            </div>
            <div className='rounded-lg border border-gray-700 bg-gray-900 bg-opacity-50 p-6'>
              <h4 className='mb-4 flex items-center text-xl font-semibold text-blue-400'>
                <Zap className='mr-2' /> Misyonumuz
              </h4>
              <p>
                Taktiksel drone teknolojisine ihtiyaç duyulan her noktada, alanında yetkin ekiplerimizle müşterilerimize
                katma değerli çözümler sunarak, paydaş memnuniyetini ön planda tutmaktayız.
              </p>
            </div>
          </div>
        </div>

        <div className='my-12 h-px bg-gray-700'></div>

        <div className='text-center'>
          <p className='mb-4'>
            Skydagger Drones, taktiksel drone teknolojisinde ilerleme ve güvenliğin bir araya geldiği bir marka olarak,
            müşteri memnuniyetine odaklanarak sektörde öncü konumunu sürdürmeyi amaçlamaktadır.
          </p>
        </div>
      </div>
    </div>
  )
}
