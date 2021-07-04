import React from 'react'
import 'rapidoc'
import localAPI from './cardxpay.json'

const Rapidoc = ({ children }) => {
  return (
    <div>
      {children}
      <rapi-doc
        spec-url="https://petstore.swagger.io/v2/swagger.json"
        render-style="read"
        style={{ height: '100vh', width: '100%' }}
      ></rapi-doc>
    </div>
  )
}

export default Rapidoc
