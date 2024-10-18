import { CATEGORY_LIST } from '@/consts'
import { products } from '@/views/categories/consts'
import ProductView from '@/views/product'

export const generateStaticParams = async () => {
  return CATEGORY_LIST.map(category => {
    return products.map(product => ({ productId: product.id.toString(), category: category }))
  }).flat()
}

interface Props {
  params: {
    productId: string
    locale: string
  }
}

export default function ProductPage({ params: { productId } }: Props) {
  return <ProductView id={productId} />
}
