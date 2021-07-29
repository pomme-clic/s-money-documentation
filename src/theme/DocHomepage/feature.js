import React from 'react'

const Feature = ({ children, title, icon }) => {
  return (
    <>
      <div className={`bg-white rounded-lg shadow-subtle p-10 space-y-4`}>
        <div className="flex items-center justify-center w-16 h-16 p-4 rounded-full bg-xp-primary-500">
          <img src={`/img/ui/icons/${icon}.svg`} />
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
