import React from 'react'
import Image from '@theme/IdealImage'
import HeroPatternX from '@site/static/img/ui/icons/arrow_x_xpollens.svg'
import HeroPatternDots from '@site/static/img/ui/icons/pattern_dots.svg'
import styles from './hero.module.css'

const Hero = ({ children }) => {
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${styles.hero}`}>
        {/* Texts */}
        <div className="relative z-50">{children}</div>
        {/* image */}
        <div>
          <div className="relative">
            <div className="rounded-tr-[50px] relative rounded-bl-[50px] overflow-hidden pb-[71%]">
              <Image
                className="!absolute !w-full !h-full"
                img={require('/img/content/home/hero.jpg')}
              />
            </div>
            <HeroPatternX
              className={`absolute -bottom-1/2 -left-1/2 translate-x-[60px]  w-[270px] h-auto`}
            />
            {/* bottom-[-30px] */}
            {/* left-[-30px] */}
            <HeroPatternDots
              className={`absolute top-[-30px] right-[-30px]  w-[150px] h-auto`}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
