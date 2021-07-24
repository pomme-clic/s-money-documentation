import React from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'

const Cta = ({ context, link, label }) => {
  return (
    <Link
      className={clsx(
        'inline-block px-8 py-3 font-bold text-white rounded-lg bg-xp-tertiaries-secondary-blue',
        'hover:no-underline hover:bg-xp-tertiaries-secondary-marine hover:text-white',
        { 'mt-5': context === 'home' },
      )}
      to={link}
    >
      {label}
    </Link>
  )
}

export default Cta
