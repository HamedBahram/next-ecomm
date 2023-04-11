import { SignUp } from '@clerk/nextjs/app-beta'

const Page = async () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <SignUp />
        </div>
      </div>
    </section>
  )
}

export default Page
