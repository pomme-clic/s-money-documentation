import React from 'react'
import clsx from 'clsx'
import { Disclosure } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Arrow from '@site/static/img/ui/icons/arrow.svg'

const CustomDisclosure = ({
  title,
  children,
  type = 'default',
  method = null,
}) => {
  console.log('method:', method)
  const variants = {
    active: {
      height: 'auto',
      transition: { duration: 0.25, type: 'spring' },
    },
    inactive: {
      height: '0',
    },
  }

  return (
    <div>
      <div className="w-full space-y-4 rounded-lg">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsx(
                  'flex flex-col  w-full px-4 py-4 text-left',
                  'text-black bg-xp-grey-100 rounded-lg hover:bg-gray-100 focus:outline-none',
                  'focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                )}
              >
                {/* Title */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    {type === 'API' && (
                      <div
                        className={clsx(
                          ' py-1 mr-4 text-sm font-semibold text-black uppercase border-2 rounded w-[70px] text-center',
                          {
                            'border-api-methods-post': method === 'post',
                            'border-api-methods-get': method === 'get',
                            'border-api-methods-delete': method === 'delete',
                            'border-api-methods-put': method === 'put',
                          },
                        )}
                      >
                        {method}
                      </div>
                    )}
                    <span>{title}</span>
                  </div>
                  <Arrow
                    className={`${
                      open ? 'transform rotate-0' : ''
                    } w-6 h-6 text-gray-300 transform rotate-180`}
                  />
                </div>
                <AnimatePresence>
                  {open && (
                    <Disclosure.Panel
                      static
                      as={motion.div}
                      variants={variants}
                      initial="inactive"
                      animate="active"
                      className="pt-6 bg-xp-grey-100"
                    >
                      {children}
                    </Disclosure.Panel>
                  )}
                </AnimatePresence>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default CustomDisclosure
