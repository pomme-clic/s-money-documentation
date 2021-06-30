import React from 'react'
import styles from './use-case.module.css'

const UseCaseText = ({ children }) => {
  return <div className={`${styles.col} ${styles.colL}`}>{children}</div>
}

export default UseCaseText
