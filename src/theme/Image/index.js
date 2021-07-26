import React from 'react'
import Image from '@theme/IdealImage'
import styles from './image.module.css'

const IdealImageWrapper = ({ src, alt }) => {
  return (
    <div className={`${styles.idealImageContainer} `}>
      <Image img={require(`/img/content/${src}`)} alt={alt} />
    </div>
  )
}

export default IdealImageWrapper
