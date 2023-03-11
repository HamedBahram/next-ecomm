import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-stone-100 py-10'>
      <nav className='container'>
        <ul className='flex gap-10'>
          <li className='text-sm font-semibold uppercase tracking-wider text-stone-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='text-sm font-semibold uppercase tracking-wider text-stone-500'>
            <Link href='/products'>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
