import React from 'react'

const Features = ({ children }) => {
  return (
    <>
      <div
        className={`relative z-50 grid grid-cols-1 md:grid-cols-3 gap-10 mt-20`}
      >
        {children}
      </div>
    </>
  )
}

export default Features
