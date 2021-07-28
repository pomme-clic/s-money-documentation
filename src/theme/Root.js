import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import styles from './root.module.css'

const Root = ({ children }) => {
  const { pathname } = useLocation()
  const isApiEmbeddingPage =
    pathname.includes('/api') && !pathname.includes('introduction')

  const isDocHomepage = pathname === '/'
  const isDocPage = pathname.includes('/docs')

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div
          className={clsx(
            'smoney selection:bg-xp-primary-500 selection:text-black',
            styles.smoney,
            isApiEmbeddingPage ? 'api' : '',
            {
              homepage: isDocHomepage,
              docpage: isDocPage,
            },
          )}
        >
          {children}
        </div>
      </QueryClientProvider>
    </>
  )
}

export default Root
