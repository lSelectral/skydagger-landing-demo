import { Category, CATEGORY_LIST } from '@/consts'
import { AccesoryProducstsView } from '@/views/categories/accessories'
import { CameraProducstsView } from '@/views/categories/cameras'
import { DroneProducstsView } from '@/views/categories/drones'

type Props = {
  params: {
    locale: LocaleParams
    category: Category
  }
}

export async function generateMetadata({ params: { category, locale } }: Props) {
  return {
    title: `Products in ${category}`
  }
}

export const generateStaticParams = () => {
  return CATEGORY_LIST.map(category => ({ category }))
}

export default function CategoryPage({ params: { category, locale } }: Props) {
  if (category === 'drone') return <DroneProducstsView />
  else if (category === 'cameras') return <CameraProducstsView />
  else if (category === 'accessories') return <AccesoryProducstsView />
  else return <div>Category not found</div>
}
