'use client'

import Link from 'next/link'
import useSWR from 'swr'

import { getCart } from '@/lib/swell/cart'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const { data: cart } = useSWR('cart', getCart)

  return (
    <header className='bg-stone-100 py-10'>
      <nav className='container flex items-center justify-between'>
        {/* Logo */}
        <div>
          <Link
            href='/'
            className='text-xl font-bold uppercase tracking-widest'
          >
            CAFE
          </Link>
        </div>

        {/* Nav links */}
        <ul className='flex items-center gap-10'>
          <li className='text-xs font-medium uppercase tracking-wider text-stone-500'>
            <Link href='/products'>Products</Link>
          </li>
        </ul>

        {/* Shopping cart */}
        <div>
          <button className='flex items-center gap-x-2 pl-4'>
            <ShoppingCartIcon className='h-7 w-7' />

            {cart?.item_quantity ? (
              <span className='flex h-5 w-5 items-center justify-center rounded bg-cyan-600 text-xs font-medium text-white'>
                {cart?.item_quantity}
              </span>
            ) : null}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
