import CompareSlider from '@/views/home/compare-slider'
import { HeroFeatureSection } from '@/views/home/feature-section'
import Hero from '@/views/home/hero'
import SocialMedia from '@/views/home/socialMedia'
import ThermalCamera from '@/views/home/thermal'

type Props = {
  params: {
    locale: LocaleParams
  }
}

export default function Home() {
  return (
    <>
      <Hero />
      <CompareSlider />
      {/* <BattarySection /> */}
      <ThermalCamera />
      <HeroFeatureSection />
      <SocialMedia />
    </>
  )
}
