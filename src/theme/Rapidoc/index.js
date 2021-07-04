import React, { useRef, useLayoutEffect } from 'react'
import 'rapidoc'

const Rapidoc = ({ apiUrl, children }) => {
  const rapidocNode = useRef()

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      // const RapidocUI = require('rapidoc')
      // RapidocUI({
      //   domNode: rapidocNode.current,
      //   ['spec-url']: 'https://petstore.swagger.io/v2/swagger.json',
      //   ['render-style']: 'read',
      // })
      // SwaggerUI({
      //   domNode: swaggerNode.current,
      //   spec: localAPI,
      // })
    }
  }, [])

  return (
    <div ref={rapidocNode}>
      {/* {children}
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
      </rapi-doc> */}
    </div>
  )
}

export default Rapidoc
