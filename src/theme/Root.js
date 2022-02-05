import React, { useEffect } from 'react'
import Head from '@docusaurus/Head'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

const Root = ({ children }) => {
  const { pathname } = useLocation()
  const isDocPage = pathname.includes('/docs')

  return (
    <>
      <Head>
        <link rel="canonical" href="https://docs.xpollens.com/" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <div
          className={clsx(
            'smoney selection:bg-xp-primary-500 selection:text-black',
            {
              docpage: isDocPage,
            },
          )}
        >
          {children}
        </div>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default Root
