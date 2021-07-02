import React from 'react'
import styles from '../UseCase/use-case.module.css'

const UseCaseCodeBlock = ({ children }) => {
  return <div className={`${styles.col} ${styles.colR}`}>
    {children}</div>
}

export default UseCaseCodeBlock
