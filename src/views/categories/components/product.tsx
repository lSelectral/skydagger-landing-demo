import CustomImage from '@/components/image'
import { Link } from '@/navigation'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { Product as ProductType } from '../type'

export function Product({ product }: { product: ProductType }) {
  const { category } = useParams()

  return (
    <Link href={`/products/${category}/${product.id}`}>
      <motion.div
        className='group relative flex h-[300px] max-w-60 flex-col items-center gap-3 rounded-lg bg-gradient-to-t from-[#E0E1E3] to-[#95949b] p-5 transition-all duration-500 hover:!scale-110 hover:rounded-3xl hover:shadow-2xl'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-[#E0E1E3] to-[#ebe8f9] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100' />

        <CustomImage
          className='h-full w-full flex-1 rounded-lg object-cover transition duration-300 group-hover:scale-105'
          src={product.imageSrc}
          alt={product.title}
        />
        <h2 className='transition-color text-2xl font-extrabold text-[#1F1F1F] duration-300 ease-in-out'>
          {product.title}
        </h2>
        <span className='transition-color duration-300 ease-in-out'>Skydagger TR</span>
        <motion.button
          className='w-4/5 rounded-2xl bg-gradient-to-tr from-[#1F1F1F] to-[#403E46] py-2 text-[#C0C0C3] transition-opacity duration-300 ease-in-out group-hover:opacity-90'
          whileHover={{
            scale: 1.05,
            backgroundColor: '#2F2E33',
            transition: { duration: 0.2 }
          }}
        >
          KEŞFET
        </motion.button>
      </motion.div>
    </Link>
  )
}
