import React from 'react'
import { useLocation } from 'react-router-dom'
// import '@algolia/autocomplete-theme-classic'

const Root = ({ children }) => {
  const { pathname } = useLocation()
  const apiStyle =
    pathname.includes('/api') && !pathname.includes('introduction')

  return (
    <>
      <div className={`smoney ${apiStyle ? 'api' : ''}`}>{children}</div>
    </>
  )
}

export default Root
