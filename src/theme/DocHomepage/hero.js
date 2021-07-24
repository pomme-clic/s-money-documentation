import React from 'react'
import Image from '@theme/IdealImage'

import styles from './hero.module.css'

const Hero = ({ children }) => {
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${styles.hero}`}>
        <div className="bg-green-100">{children}</div>
        <div className="bg-green-300">
          <div className="bg-red-500 rounded-tr-[50px] relative rounded-bl-[50px] overflow-hidden pb-[71%]">
            <Image
              className="!absolute !w-full !h-full"
              img={require('/img/content/home/hero.jpg')}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
