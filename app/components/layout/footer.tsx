const Footer = () => {
  return (
    <footer className='bg-stone-100 py-10'>
      <div className='container'>
        <h5 className='text-lg'>CAFE CO.</h5>
        <p className='mt-4 text-sm text-stone-500'>
          &copy; {new Date().getFullYear()} Cafe Co.
        </p>
        <div className='text-sm text-stone-400'>
          Developed by{' '}
          <a
            className='text-sky-600'
            href='https://hamedbahram.io/'
            rel='noreferrer'
            target='_blank'
          >
            HB
          </a>{' '}
          using{' '}
          <a
            className='text-sky-600'
            href='https://www.swell.is/'
            rel='noreferrer'
            target='_blank'
          >
            Swell
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
