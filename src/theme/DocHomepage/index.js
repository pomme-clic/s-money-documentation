import React from 'react'
import Head from '@docusaurus/Head'

const DocHomepage = ({ children }) => {
  return (
    <>
      <Head>
        <body className="homepage"></body>
      </Head>
      <div className="pb-10">{children}</div>
    </>
  )
}

export default DocHomepage
