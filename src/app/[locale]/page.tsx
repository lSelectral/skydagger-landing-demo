import BattarySection from '@/views/home/battery'
import CompareSlider from '@/views/home/compare-slider'
import Hero from '@/views/home/hero'
import SocialMedia from '@/views/home/socialMedia'
import ThermalCamera from '@/views/home/thermal'
import React from 'react'

export default function Home() {
  return (
    <>
      <Hero />
      <CompareSlider />
      <BattarySection />
      <SocialMedia />
      <ThermalCamera />
    </>
  )
}
