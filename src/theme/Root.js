import React, { useEffect } from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

const Root = ({ children }) => {
  const { pathname } = useLocation()
  const isDocPage = pathname.includes('/docs')

  useEffect(() => {
    if (
      ExecutionEnvironment.canUseDOM &&
      !document.location.host.includes('localhost')
    ) {
      const cookiebotScript = document.createElement('script')
      cookiebotScript.id = 'Cookiebot'
      cookiebotScript.src = 'https://consent.cookiebot.com/uc.js'
      // cookiebotScript.dataset.cbid = 'dcbc9948-770f-4b0b-971c-d564f7143040'
      cookiebotScript.dataset.cbid = '3385193e-7719-436a-8aac-fce7d6007678'
      cookiebotScript.dataset.blockingmode = 'auto'
      cookiebotScript.type = 'text/javascript'

      const cookieDeclarationScript = document.createElement('script')
      cookieDeclarationScript.id = 'CookieDeclaration'
      // cookieDeclarationScript.src =
      //   'https://consent.cookiebot.com/dcbc9948-770f-4b0b-971c-d564f7143040/cd.js'
      cookieDeclarationScript.src =
        'https://consent.cookiebot.com/3385193e-7719-436a-8aac-fce7d6007678/cd.js'
      cookieDeclarationScript.async = true
      cookieDeclarationScript.type = 'text/javascript'

      document.head.insertBefore(cookiebotScript, document.head.firstChild)
      document.body.appendChild(cookieDeclarationScript)
    }

    return () => {
      document.head.removeChild(cookiebotScript)
      document.body.appendChild(cookieDeclarationScript)
    }
  }, [])

  return (
    <>
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
