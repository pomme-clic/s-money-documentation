import React from 'react'
import styles from './features.module.css'

const Features = ({ children }) => {
  return (
    <>
      <div
        className={`${styles.features} relative z-50 grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10 mt-10 md:mt-16 xl:mt-20`}
      >
        {children}
      </div>
    </>
  )
}

export default Features
