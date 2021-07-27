import React from 'react'
import 'loaders.css/loaders.min.css'

const Loaders = () => {
  const loaderDivs = [...Array(5)].map((e, i) => (
    <div className="!bg-xp-primary-500 " key={i}></div>
  ))

  return (
    <div className="inline-block loader">
      <div className="scale-[40%] loader-inner ball-pulse-rise">
        {loaderDivs}
      </div>
    </div>
  )
}

export default Loaders
