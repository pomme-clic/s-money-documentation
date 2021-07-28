import React, { useRef, useEffect } from 'react'
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
      <rapi-doc
        ref={rapidocRef}
        theme="light"
        nav-bg-color="#ffffff"
        nav-text-color="black"
        nav-accent-color="#ff0000"
        layout="row"
        sort-tags="true"
        render-style="read"
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
