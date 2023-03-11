import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Products = ({ products }) => {
  return (
    <div className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-semibold'>Products</h1>

        <div className='mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className='group'
            >
              <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                <Image
                  src={product.images[0].file.url}
                  alt={product.description}
                  fill
                  className='h-full w-full object-cover object-center transition-opacity group-hover:opacity-75'
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                {formatCurrency({ amount: product.price })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
