import React from 'react'
import oldTv from '../../img/oldTv.svg';

const OldTv = ({ children }) => {
   return (
      <div className='relative w-fit mx-auto'>
         <img src={oldTv} alt="" className='h-screen opacity-1' /> {/* для размера */}
         {/* <img src={oldTv} alt="" className='h-screen z-20 absolute w-full top-0' /> Покрытие */}
         <div className='absolute w-[68.5%] h-[78.8%] top-[10%] left-[7.9%] z-10'>
            {children}
         </div>
      </div>
   )
}

export default OldTv