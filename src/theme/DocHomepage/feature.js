import React from 'react'
import styles from './feature.module.css'

const Feature = ({ children, title, icon }) => {
  return (
    <>
      <div className={` ${styles.feature}`}>
        <div className="flex items-center justify-center w-16 h-16 p-4 rounded-full bg-xp-primary-500">
          <img src={`/img/ui/icons/${icon}.svg`} width="32" height="32" />
        </div>
        <div>
          <h2 className="mt-5 !text-[20px] !leading-normal">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Feature
