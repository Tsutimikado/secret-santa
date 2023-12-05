//Z INDEX: [11 - 20];
import React from 'react'
import tree from '../../img/tree.svg'


const Tree = () => {
   return (
      <div 
         style={{ transform: "scale(-1, 1)" }}
         className='absolute bottom-[8%] left-[70%] w-80 text-white z-[11] shadow-states'>
         <div className="relative">
            <div className='w-full'><img src={tree} alt="" className='w-full'/></div>
            <div 
               className='tree-shadow-3d-container w-full'>
               <img src={tree} alt="" className='w-full tree-shadow-3d' /></div>
         </div>
      </div>
   )
}

export default Tree