import React from 'react'
import clsx from 'clsx'
import { Disclosure } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
// import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Example() {
  const variants = {
    active: {
      height: 'auto',
      transition: { duration: 0.25, type: 'spring' },
    },
    inactive: {
      height: '0',
    },
  }

  const panels = ['element1', 'element2', 'element3']

  return (
    <div>
      <div className="w-full space-y-2 rounded-lg">
        {panels.map(() => (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx(
                    'flex justify-between w-full px-4 py-4 text-left',
                    'text-black bg-xp-grey-100 rounded-lg hover:bg-gray-100 focus:outline-none',
                    'focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                  )}
                >
                  <span>What is your refund policy?</span>
                  {/* <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-gray-300 transform rotate-90`}
                  /> */}
                </Disclosure.Button>
                <AnimatePresence>
                  {open && (
                    <Disclosure.Panel
                      static
                      as={motion.div}
                      variants={variants}
                      initial="inactive"
                      animate="active"
                      className="px-4 pt-2 pb-6 text-sm text-gray-500"
                    >
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}

// const CustomDisclosure = () => {
//   return <div>disclosure</div>
// }

// export default CustomDisclosure
