import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'NextJs E-commerce APP',
  description: 'Created by Hamed Bahram'
}

const RootLayout = ({ children }) => {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
