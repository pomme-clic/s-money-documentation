import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './root.module.css'

const Root = ({ children }) => {
  const { pathname } = useLocation()
  const apiStyle =
    pathname.includes('/api') && !pathname.includes('introduction')

  return (
    <>
      <div className={`smoney ${styles.smoney} ${apiStyle ? 'api' : ''}`}>
        {children}
      </div>
    </>
  )
}

export default Root
