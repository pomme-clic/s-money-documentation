import React, { useEffect } from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

const Root = ({ children }) => {
  const { pathname } = useLocation()
  const isApiEmbeddingPage =
    pathname.includes('/api') && !pathname.includes('introduction')

  const isDocHomepage = pathname === '/'
  const isDocPage = pathname.includes('/docs')

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      // console.log('document:', document)
      // const getApiSubTreesElements = () => {
      //   console.log(ocument)
      // }
    }
  })

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div
          className={clsx(
            'smoney selection:bg-xp-primary-500 selection:text-black',
            isApiEmbeddingPage ? 'api' : '',
            {
              homepage: isDocHomepage,
              docpage: isDocPage,
            },
          )}
        >
          {children}
        </div>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  )
}

export default Root
