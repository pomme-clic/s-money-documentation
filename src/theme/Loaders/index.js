import React from 'react'
import 'loaders.css/loaders.min.css'

const Loaders = () => {
  return (
    <div className="inline-block loader">
      <div className="scale-[40%] loader-inner ball-pulse-rise">
        <div className="!bg-xp-primary-500"></div>
        <div className="!bg-xp-primary-500"></div>
        <div className="!bg-xp-primary-500"></div>
        <div className="!bg-xp-primary-500"></div>
        <div className="!bg-xp-primary-500"></div>
      </div>
    </div>
  )
}

export default Loaders
