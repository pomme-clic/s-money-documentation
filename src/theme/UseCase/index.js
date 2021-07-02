import React from 'react'
import styles from './use-case.module.css'

const UseCase = ({ children }) => {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
}

export default UseCase
