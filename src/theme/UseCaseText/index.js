import React from 'react'
import styles from '../UseCase/use-case.module.css'

const UseCaseText = ({ children }) => {
  return (
    <div className={`${styles.col} ${styles.colL} `}>
      <div className="bg-red-500">test</div>
      {children}
    </div>
  )
}

export default UseCaseText
