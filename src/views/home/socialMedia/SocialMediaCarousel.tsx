'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed'

const links = [
  'https://www.youtube.com/shorts/-j9g74r8F5E',
  'https://www.youtube.com/shorts/GiwBh9ft3uc',
  'https://www.instagram.com/p/DASqTgpK-cx/',
  'https://www.instagram.com/p/C-3FBhKJPdq/',
  'https://www.instagram.com/p/C_N6V3QP2Sh/'
]

export default function SocialMediaCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'center'
      }}
      className='w-full'
    >
      <CarouselContent>
        {links.map((link, index) => (
          <CarouselItem
            key={index}
            className='flex h-auto w-full items-center justify-center md:basis-1/2 xl:basis-1/3 2xl:basis-1/4'
          >
            <Card className='w-full rounded-3xl border-card-dark bg-card-dark'>
              <CardContent className='size-full !p-2'>
                {link.includes('youtube') ? (
                  <YouTubeEmbed key={index} url={link} width='100%' className='!rounded-3xl' height={500} />
                ) : (
                  <InstagramEmbed key={index} url={link} width='100%' className='!rounded-3xl' height={500} />
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
