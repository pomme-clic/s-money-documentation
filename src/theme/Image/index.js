import React from 'react'
import Image from '@theme/IdealImage'
import styles from './image.module.css'

const IdealImageWrapper = ({ src }) => {
  return (
    <div className={`${styles.idealImageContainer} `}>
      <Image img={require(`/img/content/${src}`)} />
    </div>
  )
}

export default IdealImageWrapper
