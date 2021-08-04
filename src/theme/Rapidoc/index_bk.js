import React, { useRef, useEffect, useState } from 'react'

import useThemeContext from '@theme/hooks/useThemeContext'
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

const Rapidoc = ({ apiUrl }) => {
  const { siteConfig } = useDocusaurusContext()
  const {
    themeConfig: { baseAPIUrl },
  } = siteConfig
  const fullAPIUrl = `${baseAPIUrl}${apiUrl}`

  const { isDarkTheme } = useThemeContext()
  const rapidocRef = useRef()

  const [mountRapidoc, setMountRapidoc] = useState(false)
  const [renderRapidoc, setRenderRapidoc] = useState(false)

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      require('rapidoc')
      setMountRapidoc(true)
    }
  }, [])

  useEffect(() => {
    if (mountRapidoc) {
      const handleRenderRapidoc = (e) => {
        // console.log('spec-loaded')
        console.log('before-render')
        setRenderRapidoc(true)
      }

      // rapidocRef.current.addEventListener('spec-loaded', handleRenderRapidoc)
      rapidocRef.current.addEventListener('before-render', handleRenderRapidoc)

      return () => {
        rapidocRef.current.removeEventListener(
          'before-render',
          handleRenderRapidoc,
        )
      }
    }
  }, [mountRapidoc])

  const fetchAPI = async () => {
    try {
      const response = await axios.get(fullAPIUrl)
      return response.data
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const { isLoading, isError, isSuccess, error, data } = useQuery(
    ['fetchAPI', apiUrl],
    fetchAPI,
    {
      retry: false,
    },
  )

  useEffect(() => {
    console.log('isSuccess useEffect')

    if (data) {
      const stringifiedData = JSON.stringify(data)
      rapidocRef.current.loadSpec(JSON.parse(stringifiedData))
    }
  }, [isSuccess])

  return (
    <>
      {!mountRapidoc ? (
        <div>
          rapidoc is not mounted
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          rapidoc is mounted
          {isLoading && (
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              <Loader />
            </div>
          )}
          {isError && (
            <div className="absolute text-red-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              Error fetching API : {error.message}
            </div>
          )}
          <div style={{ visibility: !renderRapidoc ? 'hidden' : 'visible' }}>
            {/* spec-url={fullAPIUrl} */}
            <rapi-doc
              ref={rapidocRef}
              theme={isDarkTheme ? 'dark' : 'light'}
              bg-color={
                isDarkTheme ? customThemeColors['darkmode-background'] : '#fff'
              }
              nav-bg-color={isDarkTheme ? '#081014' : '#F5F5F5'}
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
              show-header="false"
              show-info="true"
              show-components="false"
              allow-api-list-style-selection="false"
              style={{ height: 'calc(100vh - 60px)', width: '100%' }}
            ></rapi-doc>
          </div>
        </div>
      )}
    </>
  )
}

export default Rapidoc
