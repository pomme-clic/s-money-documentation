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
          spec-url={apiUrl}
          render-style="read"
          show-header="false"
          show-info="false"
          allow-search="false"
          allow-advanced-search="false"
          allow-api-list-style-selection="false"
          style={{ height: '100vh', width: '100%' }}
        >
          <p> This is an example of adding external HTML content. </p>
          <p> You may add: </p>
          <ul>
            <li> Tables </li>
            <li> Text </li>
            <li> Images </li>
            <li> Links </li>
            <li> Any HTML content </li>
          </ul>
        </rapi-doc>
      )}
    </div>
  )
}

export default Rapidoc
