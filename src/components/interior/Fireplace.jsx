import React from 'react'

const Fireplace = () => {
  return (
    <div className='absolute top-0 left-1/2 -translate-x-1/2 h-[80%]'>
      <div className="flex flex-col h-full items-center">
        <div className='w-[70%] bg-amber-800  border-x-2 border-amber-900 flex-grow relative'>
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#050526]/50  to-transparent"></div>
        </div>
        {/* <div className='w-36 bg-amber-800  border-x-2 border-amber-900 flex-grow relative'>
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div> */}
        <div className="flex flex-col items-center h-1/3 relative shadow">
          {/* <div className="absolute  w-full h-full -top-[10%] "></div> */}
          <div className='w-[22rem] bg-amber-800  border-2 border-amber-900 h-3 rounded-t-lg '></div>
          <div className='w-[21rem] bg-amber-800  border-x-2 border-b-2 border-amber-900 h-2 rounded-b-md '></div>
          <div className='w-80 bg-amber-800  border-x-2 border-amber-900 flex-grow flex justify-center items-end '>
            <div className='bg-black w-[83%] h-[87%] overflow-hidden rounded-t-md '>
              <div className=' w-full h-full'></div>
            </div>
          </div>
          <div className='w-[21rem] bg-amber-800  border-x-2 border-t-2 border-amber-900 h-2 rounded-t-lg'></div>
          <div className='w-[25rem] bg-amber-800  border-2 border-amber-900 h-3'></div>
        </div>
      </div>
    </div>
  )
}

export default Fireplace