import { Dot, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import CustomImage from '../image'

const Footer = () => {
  return (
    <footer className='bg-black 2xl:h-[22rem]'>
      <div className='container mx-auto h-full py-12'>
        <div className='flex size-full gap-20 text-white max-2xl:flex-col max-md:items-center max-md:gap-10'>
          <div className='flex flex-col justify-between md:w-max md:text-nowrap'>
            <CustomImage src='/logo.png' alt='Logo' width={370} height='auto' />
            <p className='ml-5 font-extralight'>© 2024 SKYDAGGER DRONES. ALL RIGHTS RESERVED</p>
          </div>
          <div className='grid w-full grid-cols-1 gap-10 max-md:justify-items-center max-md:text-center md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col gap-5'>
              <h6 className='font-bold'>Hakkımızda</h6>
              <ul className='flex flex-col gap-2 pl-2'>
                <li className='w-max cursor-pointer max-md:self-center'>
                  <Dot size={30} className='inline' />
                  Biz Kimiz?
                </li>
                <li className='w-max cursor-pointer max-md:self-center'>
                  <Dot size={30} className='inline' />
                  Vizyon ve Misyonumuz
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <h6 className='font-bold'>Sosyal Medya</h6>
              <ul className='flex flex-col gap-2 pl-2'>
                <li className='flex w-max cursor-pointer gap-5 max-md:self-center'>
                  <Instagram size={30} className='inline' />
                  Instagram
                </li>
                <li className='flex w-max cursor-pointer gap-5 max-md:self-center'>
                  <Twitter size={30} className='inline' />
                  Twitter
                </li>
                <li className='flex w-max cursor-pointer gap-5 max-md:self-center'>
                  <Youtube size={30} className='inline' />
                  Youtube
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <h6 className='font-bold'>İletişim</h6>
              <ul className='flex flex-col gap-2 pl-2'>
                <li className='w-max cursor-pointer max-md:self-center'>
                  <Dot size={30} className='inline' />
                  SKYDAGGER INTERNATIONAL
                </li>
                <li className='w-max cursor-pointer pl-2 max-md:self-center'>
                  <Dot size={30} className='inline' />
                  info@skydagger.com
                </li>
                <li className='w-max cursor-pointer max-md:self-center'>
                  <Dot size={30} className='inline' />
                  UKRAINE - Kiev
                </li>
                <li className='w-max cursor-pointer pl-2 max-md:self-center'>
                  <Dot size={30} className='inline' />
                  ukraine@skydagger.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
