import React, { useRef, useState, useLayoutEffect } from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

const Rapidoc = ({ apiUrl, children }) => {
  const [displayDoc, setDisplayDoc] = useState(false)

  useLayoutEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      require('rapidoc')
      setDisplayDoc(true)
      console.log('can execute DOM')
    }
  }, [])

  return (
    <div>
      {children}
      {displayDoc && (
        <rapi-doc
          theme="light"
          nav-bg-color="#ffffff"
          nav-text-color="black"
          nav-accent-color="#ff0000"
          spec-url={apiUrl}
          layout="row"
          sort-tags="true"
          render-style="read"
          show-header="false"
          show-info="true"
          show-components="false"
          allow-search="false"
          allow-advanced-search="false"
          // allow-schema-description-expand-toggle="false"
          allow-api-list-style-selection="false"
          style={{ height: '100vh', width: '100%' }}
        >
          {/* <p> This is an example of adding external HTML content. </p>
          <p> You may add: </p>
          <ul>
            <li> Tables </li>
            <li> Text </li>
            <li> Images </li>
            <li> Links </li>
            <li> Any HTML content </li>
          </ul> */}
        </rapi-doc>
      )}
    </div>
  )
}

export default Rapidoc
