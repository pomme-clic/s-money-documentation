import React from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'
import Arrow from '@site/static/img/ui/icons/arrow.svg'
import styles from './styles.module.css'

const Cta = ({ context, ui, link, label }) => {
  return (
    <>
      <div
        className={clsx(
          `flex items-center ${styles.cta} ${
            ui === 'inline' && styles.inlineStyle
          }`,
          {
            'mt-5': context === 'hero',
            'mt-4': context === 'feature',
            'justify-center': context === 'doc',
          },
        )}
      >
        {ui === 'inline' && <Arrow className={`${styles.arrow}`} />}
        <Link
          className={clsx('font-bold text', {
            ' inline-block px-8 py-3 text-white text-center rounded-lg bg-xp-tertiaries-secondary-blue !no-underline hover:no-underline hover:bg-xp-tertiaries-secondary-marine hover:text-white':
              context === 'hero' || context === 'doc',
            'mt-8 py-2 w-full md:w-auto': context === 'doc',
            'inline-block ': context === 'feature',
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
