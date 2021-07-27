import React, { useRef, useState, useEffect } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import axios from 'axios'
import Loader from '@theme/Loaders'

const Rapidoc = ({ apiUrl }) => {
  const { siteConfig } = useDocusaurusContext()
  const {
    themeConfig: { baseAPIUrl },
  } = siteConfig
  const fullAPIUrl = `${baseAPIUrl}${apiUrl}`

  const rapidocRef = useRef()
  const [displayDoc, setDisplayDoc] = useState(false)

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      require('rapidoc')

      axios
        .get(fullAPIUrl)
        .then(function (response) {
          const jsonResponse = JSON.stringify(response.data)
          setDisplayDoc(true)
          rapidocRef.current.loadSpec(JSON.parse(jsonResponse))
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    return () => {
      setDisplayDoc(false)
    }
  }, [])

  return (
    <div className="flex items-center justify-center">
      {displayDoc ? (
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
      ) : (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <Loader />
        </div>
      )}
    </div>
  )
}

export default Rapidoc
