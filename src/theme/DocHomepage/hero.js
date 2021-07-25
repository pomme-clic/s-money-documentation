import React from 'react'
import Image from '@theme/IdealImage'
import HeroPatternX from '@site/static/img/ui/icons/arrow_x_xpollens.svg'
import HeroPatternDots from '@site/static/img/ui/icons/pattern_dots.svg'
import styles from './hero.module.css'

const Hero = ({ children }) => {
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${styles.hero}`}>
        {/* Left col */}
        <div className="relative z-50">{children}</div>

        {/* Right col */}
        <div className="hidden md:flex">
          {/* Image + pattern container */}
          <div className="relative self-center w-full ">
            {/* Image cropper */}
            <div className="relative w-full rounded-tr-[50px] rounded-bl-[50px] pb-[71%]  overflow-hidden">
              <Image
                className="!absolute !w-full !h-full"
                img={require('/img/content/home/hero.jpg')}
              />
            </div>
            {/* Patterns */}
            <HeroPatternX
              className={`absolute bottom-0 left-0 translate-y-[35%] -translate-x-1/2 w-[60%] h-auto`}
            />
            <HeroPatternDots
              className={`absolute top-0 right-0 translate-y-[-10%] translate-x-[30%] w-[30%] h-auto`}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
