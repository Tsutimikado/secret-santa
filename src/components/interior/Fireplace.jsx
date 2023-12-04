import React, { useEffect, useState } from 'react'
import wreath from '../../img/wreath.svg'
import wood from '../../img/wood1.svg'

const Fireplace = () => {

  // useEffect(()=> {
  //   setInterval(()=> {console.log('timer works');},1000);
  //   return ()
  // }, 
  //   [])
  const [flameFrame, setFlameFrame] = useState('bg-flame');

  return (
    <div className='absolute top-0 left-1/2 -translate-x-1/2 h-[77%] z-[5] shadow-states'>
      <div className="flex flex-col h-full items-center">
        <div
          id='fireplace-flue'
          className='w-[65%] flex-grow relative'>
          <div
            style={{ filter: 'hue-rotate(25deg) brightness(0.9) saturate(0.8) contrast(1.3)' }}
            className="absolute bottom-0 w-full h-full bg-brickwall bg-cover"></div>
          <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#050516]/75 via-[#050516]/50  to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-[3%] h-full bg-gradient-to-l from-[#050516] via-black/25  to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-[3%] h-full bg-gradient-to-r from-[#050516] via-black/25  to-transparent"></div>
          <div className="bottom-0 w-full">
            <img src={wreath} alt="" className='w-9/12 mx-auto mt-5 shadow-wreath' />
          </div>
        </div>
        {/* <div className='w-36 bg-amber-800  border-x-2 border-amber-900 flex-grow relative'>
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div> */}
        <div className="flex flex-col items-center h-1/3 relative shadow-l">
          {/* <div className="absolute  w-full h-full -top-[10%] "></div> */}
          <div className="h-full shadow-r">
            <div className="h-full flex flex-col items-center shadow-t">
              <div className='w-[18rem] bg-amber-800  border-2 border-amber-900 h-3 rounded-t-lg '></div>
              <div className='w-[17rem] bg-amber-800  border-x-2 border-b-2 border-amber-900 h-2 rounded-b-md '></div>
              <div className=' bg-amber-800 w-64  border-x-2 border-amber-900 flex-grow flex justify-center items-end '>
                <div
                  className=' w-[83%] h-[87%] overflow-hidden rounded-t-md backdrop-brightness-50'>
                  <div className="absolute bottom-0 w-full h-full bg-brickwall -z-10 fire-bg-filter"></div>
                  <div className='w-full h-full fire relative'>
                    <div id='fireplace-wood' className={' absolute -bottom-10 left-1/2 -translate-x-1/2 w-52 h-52 z-10 ' + flameFrame}>
                    </div>
                    <div id='fireplace-wood' className=' absolute -bottom-7 left-1/2 -translate-x-1/2 w-fit h-fit z-[5]'>
                      <img src={wood} alt="" className='brightness-75 w-24' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-b flex flex-col items-center">
                <div className='w-[17rem] bg-amber-800  border-x-2 border-t-2 border-amber-900 h-2 rounded-t-lg'></div>
                <div className='w-[22rem] bg-amber-800  border-2 border-amber-900 h-3 rounded-t-md'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fireplace