'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { isLoaded, isSignedIn, user } = useUser()
  const router = useRouter()

  if (isLoaded && !isSignedIn) {
    router.push('/sign-in?redirectUrl=/dashboard')
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
      </div>
    </section>
  )
}

export default Page
