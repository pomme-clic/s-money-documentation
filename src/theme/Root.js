import React, { useState, useEffect } from 'react'
import Head from '@docusaurus/Head'

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
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="dcbc9948-770f-4b0b-971c-d564f7143040"
          data-blockingmode="auto"
          type="text/javascript"
        ></script>
        <script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/dcbc9948-770f-4b0b-971c-d564f7143040/cd.js"
          type="text/javascript"
          defer
        ></script>
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
