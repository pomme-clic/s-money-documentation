import React from 'react'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import styles from './root.module.css'

const Root = ({ children }) => {
  const { pathname } = useLocation()
  const apiStyle =
    pathname.includes('/api') && !pathname.includes('introduction')
  const isDocHomepage = pathname === '/'
  console.log(pathname)

  return (
    <>
      <div
        className={clsx('smoney', styles.smoney, apiStyle ? 'api' : '', {
          homepage: isDocHomepage,
        })}
      >
        {children}
      </div>
    </>
  )
}

export default Root
