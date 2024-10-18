'use client'
import { CategoryHeader } from '../components/catergoryHeader'
import { Product } from '../components/product'
import { products } from '../consts'

export function CameraProducstsView() {
  return (
    <>
      <CategoryHeader title='Kameralar' imageSrc='/products-drone.png' />
      <div className='container mx-auto py-10'>
        <div className='flex flex-wrap justify-center gap-10'>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}
