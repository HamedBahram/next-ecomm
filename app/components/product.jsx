'use client'

import Image from 'next/image'
import clsx from 'clsx'

import { Disclosure, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { formatCurrency } from '@/lib/utils'

const details = [
  {
    name: 'Features',
    items: [
      'Multiple strap configurations',
      'Spacious interior with top zip',
      'Leather handle and tabs',
      'Interior dividers',
      'Stainless strap loops',
      'Double stitched construction',
      'Water-resistant'
    ]
  }
]

const Product = ({ product }) => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          {/* Image gallery */}
          <Tab.Group as='div' className='flex flex-col-reverse'>
            {/* Image selector */}
            <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
              <Tab.List className='grid grid-cols-4 gap-6'>
                {product.images.map(image => (
                  <Tab
                    key={image.id}
                    className='relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none'
                  >
                    {({ selected }) => (
                      <>
                        <span className='sr-only'>
                          {' '}
                          {image?.file?.metadata}{' '}
                        </span>
                        <span className='absolute inset-0 overflow-hidden rounded-md'>
                          <Image
                            alt=''
                            fill
                            src={image?.file?.url}
                            className='h-full w-full object-cover object-center'
                          />
                        </span>
                        <span
                          className={clsx(
                            selected ? 'ring-sky-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                          )}
                          aria-hidden='true'
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className='aspect-w-1 aspect-h-1 w-full'>
              {product.images?.map(image => (
                <Tab.Panel key={image.id}>
                  <Image
                    fill
                    src={image.file.url}
                    alt={image.file.metadata || ''}
                    className='h-full w-full object-cover object-center sm:rounded-lg'
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
              {product.name}
            </h1>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-3xl tracking-tight text-gray-900'>
                {formatCurrency({ amount: product.price })}
              </p>
            </div>

            {/* Reviews */}
            <div className='mt-3'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map(rating => (
                    <StarIcon
                      key={rating}
                      className={clsx(
                        4 > rating ? 'text-yellow-500' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>

              <div
                className='space-y-6 text-base text-gray-700'
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className='mt-6'>
              <div className='sm:flex-col1 mt-10 flex'>
                <button
                  type='submit'
                  className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-sky-600 py-3 px-8 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
                >
                  Add to bag
                </button>
              </div>
            </form>

            <section aria-labelledby='details-heading' className='mt-12'>
              <h2 id='details-heading' className='sr-only'>
                Additional details
              </h2>

              <div className='divide-y divide-gray-200 border-t'>
                {details?.map(detail => (
                  <Disclosure as='div' key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className='group relative flex w-full items-center justify-between py-6 text-left'>
                            <span
                              className={clsx(
                                open ? 'text-sky-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className='ml-6 flex items-center'>
                              {open ? (
                                <MinusIcon
                                  className='block h-6 w-6 text-sky-400 group-hover:text-sky-500'
                                  aria-hidden='true'
                                />
                              ) : (
                                <PlusIcon
                                  className='block h-6 w-6 text-gray-400 group-hover:text-gray-500'
                                  aria-hidden='true'
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as='div'
                          className='prose prose-sm pb-6'
                        >
                          <ul role='list'>
                            {detail.items.map(item => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
