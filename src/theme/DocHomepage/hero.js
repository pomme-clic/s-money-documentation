import React from 'react'

const Hero = ({ children }) => {
  console.log(children)
  return (
    <>
      <div className="flex items-stretch w-full hero">
        <div className="flex flex-col items-start w-1/2 bg-red-500">
          {React.cloneElement(children[0])}
          {React.cloneElement(children[1])}
          <div className="mt-5">{React.cloneElement(children[2])}</div>
        </div>
        <div className="w-1/2 bg-green-500">Image</div>
      </div>
    </>
  )
}

export default Hero
