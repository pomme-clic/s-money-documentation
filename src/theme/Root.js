import React from 'react'

const Root = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen p-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/img/ui/logo_xpollens.svg"
            alt="Xpollens API docs"
            className="block w-[200px]"
          />
          <p className="mt-2 text-sm text-center text-xp-grey-700">
            Xpollens API docs is currently down for maintenance.
          </p>
        </div>
      </div>
    </>
  )
}

export default Root
