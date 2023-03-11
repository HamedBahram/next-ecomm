import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-stone-100 py-10'>
      <nav className='container'>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
