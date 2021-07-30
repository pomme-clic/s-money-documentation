import React, { useRef, useEffect } from 'react'

import useThemeContext from '@theme/hooks/useThemeContext'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loader from '@theme/Loaders'

const Rapidoc = ({ apiUrl }) => {
  const { siteConfig } = useDocusaurusContext()
  const {
    themeConfig: { baseAPIUrl },
  } = siteConfig
  const fullAPIUrl = `${baseAPIUrl}${apiUrl}`

  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext()

  const rapidocRef = useRef()

  const fetchAPI = async () => {
    try {
      const response = await axios.get(fullAPIUrl)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const { isLoading, isError, data, error } = useQuery(
    ['fetchAPI', { apiUrl }],
    fetchAPI,
  )

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      require('rapidoc')
    }
  }, [])

  useEffect(() => {
    if (data) {
      const stringifiedData = JSON.stringify(data)
      rapidocRef.current.loadSpec(JSON.parse(stringifiedData))
    }
  }, [data])

  return (
    <div className="flex items-center justify-center">
      {isLoading && (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <Loader />
        </div>
      )}
      {isError && (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          Error fetching API : {error}
        </div>
      )}
      {/* nav-accent-color="#ff0000" */}
      <rapi-doc
        ref={rapidocRef}
        theme={isDarkTheme ? 'dark' : 'light'}
        bg-color={isDarkTheme ? '#121E24' : '#fff'}
        nav-bg-color={isDarkTheme ? '#081014' : '#fff'}
        nav-text-color={isDarkTheme ? '#ffffff' : '#000000'}
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
        allow-search="false"
        allow-advanced-search="false"
        allow-api-list-style-selection="false"
        style={{ height: '100vh', width: '100%' }}
      ></rapi-doc>
    </div>
  )
}

export default Rapidoc
