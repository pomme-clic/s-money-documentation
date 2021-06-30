import React from 'react'
import styles from './use-case.module.css'

const UseCaseCodeBlock = ({ children }) => {
  return <div className={`${styles.col} ${styles.colR}`}>{children}</div>
}

export default UseCaseCodeBlock
