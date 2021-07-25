import React from 'react'

const Features = ({ children }) => {
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 mt-10`}>
        {children}
      </div>
    </>
  )
}

export default Features
