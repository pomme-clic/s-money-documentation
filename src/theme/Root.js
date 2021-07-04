import React from 'react'
import { useLocation } from 'react-router-dom'

const Root = ({ children }) => {
  const { pathname } = useLocation()
  const apiStyle =
    pathname.includes('/api') && !pathname.includes('introduction')

  return (
    <>
      <div className={apiStyle ? 'api' : ''}>{children}</div>
    </>
  )
}

export default Root
