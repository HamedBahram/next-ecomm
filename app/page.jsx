import { getProducts } from '@/lib/swell/products'
import Products from '@/components/products'

const Page = async () => {
  const { results: products } = await getProducts({ page: 1 })

  return <Products products={products} />
}

export default Page
