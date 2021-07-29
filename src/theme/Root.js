import React from 'react'

const Root = () => {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen p-10">
        <div class="flex flex-col justify-center items-center">
          <img
            src="img/ui/logo_xpollens.svg"
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
