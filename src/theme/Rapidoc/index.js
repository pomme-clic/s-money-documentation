import React, { useRef, useEffect, useState } from 'react'
import Head from '@docusaurus/Head'

//import useThemeContext from '@theme/hooks/useThemeContext'
import { useColorMode } from '@docusaurus/theme-common'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loader from '@theme/Loaders'
import './styles.module.css'

const customThemeColors = {
  'darkmode-background': '#121E24',
  'xp-primary-500': '#FFCC00',
  'xp-tertiaries': {
    'primary-ciel': '#63C2C7',
    'secondary-blue': '#006D8C',
  },
}

import localAPI from '@site/swaggers/swagger.json'

const Rapidoc = ({ apiUrl, isRelative }) => {
  const { isDarkTheme } = useColorMode()
  //const { isDarkTheme } = useThemeContext()
  const { siteConfig } = useDocusaurusContext()

  const serverUrl = siteConfig.themeConfig.serverUrl
  const tryoutsServerUrl = 'https://sb-api.xpollens.com'

  // Rapidoc rendering
  const rapidocRef = useRef()
  const [renderRapidoc, setRenderRapidoc] = useState(false)

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      require('rapidoc')
    }
  }, [])

  // React Query
  const fetchAPI = async () => {
    // const fullAPIUrl = isRelative
    //   ? `${serverUrl}/swagger/docs${apiUrl}`
    //   : apiUrl

    // const fullAPIUrl = localAPI

    // console.log('fullAPIUrl: ', fullAPIUrl)

    try {
      // const response = await axios.get(fullAPIUrl)
      return localAPI
      // return response.data
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const { isLoading, isError, data, error } = useQuery(
    ['fetchAPI', { apiUrl }],
    fetchAPI,
    {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    },
  )

  // Rapidoc parsing
  const loadRapidocSpec = async (stringifiedData) => {
    await rapidocRef.current.loadSpec(stringifiedData)
    rapidocRef.current.shadowRoot.querySelector('#auth .m-btn').click()
  }

  useEffect(() => {
    if (data) {
      data.components.securitySchemes['Sts authentication']['x-client-id'] =
        'Demo'
      data.components.securitySchemes['Sts authentication']['x-client-secret'] =
        'Demo'

      const stringifiedData = JSON.stringify(data)

      if (rapidocRef.current) {
        loadRapidocSpec(JSON.parse(stringifiedData))

        const handleRenderRapidoc = (e) => {
          setRenderRapidoc(true)
        }

        rapidocRef.current.addEventListener(
          'before-render',
          handleRenderRapidoc,
        )

        setRenderRapidoc(true)

        // Cleanup
        return () => {
          rapidocRef.current.removeEventListener(
            'before-render',
            handleRenderRapidoc,
          )
        }
      }
    }
  }, [data])

  return (
    <>
      <Head>
        <link rel="canonical" href="https://docs.xpollens.com/" />
        <style>{'body { overflow: visible; }'}</style>
        <body className="api"></body>
      </Head>

      <div className="flex items-center justify-start p-5 lg:p-0">
        {/* justify-center */}
        {(isLoading || (!renderRapidoc && !isError)) && (
          <div className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Loader />
            <div className="mt-4 font-semibold ">Fetching API...</div>
          </div>
        )}
        {isError && (
          <div className="absolute flex flex-col items-center text-red-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="font-bold ">Error: </div>
            <div>{error.message}</div>
          </div>
        )}
        <div
          className="w-full"
          style={{
            visibility:
              !renderRapidoc || isError || isLoading ? 'hidden' : 'visible',
          }}
        >
          <rapi-doc
            ref={rapidocRef}
            theme={isDarkTheme ? 'dark' : 'light'}
            bg-color={
              isDarkTheme ? customThemeColors['darkmode-background'] : '#fff'
            }
            nav-bg-color={isDarkTheme ? '#081014' : '#f7f7f7'}
            nav-text-color={isDarkTheme ? '#ffffff' : '#000000'}
            nav-accent-color={
              isDarkTheme
                ? customThemeColors['xp-tertiaries']['primary-ciel']
                : customThemeColors['xp-tertiaries']['secondary-blue']
            }
            nav-item-spacing="relaxed"
            layout="row"
            sort-tags="true"
            render-style="read"
            load-fonts="false"
            regular-font="Poppins"
            primary-color="#63C2C7"
            sort-endpoints-by="summary"
            schema-description-expanded="true"
            allow-server-selection="true"
            server-url={tryoutsServerUrl}
            default-api-server={tryoutsServerUrl}
            show-header="false"
            show-info="true"
            show-components="false"
            allow-api-list-style-selection="false"
            style={{
              height: 'calc(100vh - 60px)',
              width: '100%',
              maxWidth: '100%',
            }}
          ></rapi-doc>
        </div>
      </div>
    </>
  )
}

export default Rapidoc
