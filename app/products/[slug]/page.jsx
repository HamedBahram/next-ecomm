import { getProductBySlugOrId } from '@/lib/swell/products'
import Product from '@/components/product'

const Page = async ({ params }) => {
  const product = await getProductBySlugOrId(params.slug)

  return <Product product={product} />
}

export default Page
