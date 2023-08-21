import React from 'react'

const Live = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl  bg-white mb-4 flex flex-col items-center">
      <div>
          <p class="max-w-2xl mb-6 font-regular text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">The below window contains all the data fetched from the device.</p>
        </div>
    <div className="w-full h-screen bg-black text-white p-4 rounded-lg shadow-md mb-4">
      {/* Replace with your log data content */}
      Log data goes here...
    </div>
    </div>
    </div>
  )
}

export default Live
