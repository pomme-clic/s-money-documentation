import React from 'react'
import Link from '@docusaurus/Link'

const Cta = ({ children }) => {
  return (
    <Link
      className="inline-block px-5 py-2 font-bold text-white rounded bg-xp-tertiaries-secondary-blue"
      to="docs/get-started/doc1"
    >
      Get started
    </Link>
  )
}

export default Cta
