'use client'
import { CategoryHeader } from '../components/catergoryHeader'
import { Product } from '../components/product'
import { products } from '../consts'

export function AccesoryProducstsView() {
  return (
    <>
      <CategoryHeader title='Aksesuarlar' imageSrc='/products-drone.png' />{' '}
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
