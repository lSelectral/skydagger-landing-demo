import CustomImage from '@/components/image'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tabs } from '@radix-ui/react-tabs'
import React from 'react'

const PorductsPage = () => {
  return (
    <main className='bg-[#191919] py-20'>
      <div className='container mx-auto'>
        <Tabs defaultValue='drone' className='w-auto space-y-0'>
          <TabsList className='flex h-auto w-fit gap-0 p-0 text-[#BDBCC1]'>
            <TabsTrigger value='drone' className='bg-[#1E1C1F] p-5 px-8 text-lg'>
              Dronlar
            </TabsTrigger>
            <TabsTrigger value='camera' className='bg-[#232124] p-5 px-8 text-lg'>
              Kameralar
            </TabsTrigger>
            <TabsTrigger value='thermal' className='bg-[#2C292D] p-5 px-8 text-lg'>
              Aksesuarlar
            </TabsTrigger>
          </TabsList>
          <TabsContent value='drone' className='w-full rounded-3xl !rounded-tl-none bg-[#1E1C1F] p-5 py-20 shadow-2xl'>
            <div className='grid w-full grid-cols-4 justify-items-center gap-5 text-[#F3F2F7]'>
              <div className='flex flex-col gap-2'>
                <CustomImage src='/dr1.png' alt='drone' width={300} height='auto' />
                <span className='text-2xl font-extrabold'>Skydagger 13’’</span>
                <span className=''>Skydagger Tr</span>
              </div>
              <div className='flex flex-col gap-2'>
                <CustomImage src='/dr1.png' alt='drone' width={300} height='auto' />
                <span className='text-2xl font-extrabold'>Skydagger 13’’</span>
                <span className=''>Skydagger Tr</span>
              </div>
              <div className='flex flex-col gap-2'>
                <CustomImage src='/dr1.png' alt='drone' width={300} height='auto' />
                <span className='text-2xl font-extrabold'>Skydagger 13’’</span>
                <span className=''>Skydagger Tr</span>
              </div>
              <div className='flex flex-col gap-2'>
                <CustomImage src='/dr1.png' alt='drone' width={300} height='auto' />
                <span className='text-2xl font-extrabold'>Skydagger 13’’</span>
                <span className=''>Skydagger Tr</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='camera' className='w-full rounded-3xl !rounded-tl-none bg-[#232124] p-5'>
            <h2 className='text-white'>Kameralar</h2>
          </TabsContent>
          <TabsContent value='thermal' className='w-full rounded-3xl !rounded-tl-none bg-[#2C292D] p-5'>
            <h2 className='text-white'>Aksesuarlar</h2>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

export default PorductsPage
