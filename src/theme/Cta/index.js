import React from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'
import Arrow from '@site/static/img/ui/icons/arrow.svg'

const Cta = ({ context, ui, link, label }) => {
  return (
    <>
      <div
        className={clsx('flex items-center', {
          'mt-5': context === 'hero',
          'mt-4': context === 'feature',
        })}
      >
        {ui === 'inline' && (
          <Arrow className="inline rotate-90 fill-current text-xp-tertiaries-secondary-blue relative left-[-4px] w-6" />
        )}
        <Link
          className={clsx('font-bold', {
            ' inline-block px-8 py-3 text-white rounded-lg bg-xp-tertiaries-secondary-blue hover:no-underline hover:bg-xp-tertiaries-secondary-marine hover:text-white':
              context === 'hero',
            'inline-block text-xp-tertiaries-secondary-blue':
              context === 'feature',
          })}
          to={link}
        >
          {label}
        </Link>
      </div>
    </>
  )
}

export default Cta
