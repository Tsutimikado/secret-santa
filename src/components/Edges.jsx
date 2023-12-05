import React from 'react'

const Edges = () => {
   return (
      <>
         <div id='floor-line' className="h-[1px] bg-white/50 absolute top-[75.5%] w-[92%] left-1/2 -translate-x-1/2 "></div>

         <div id='right-edge' className="w-[1px] h-[77%] bg-white/50 absolute bottom-[25%] rounded-full left-[4%] translate-y-1"></div>
         <div id='left-edge' className="w-[1px] h-[77%] bg-white/50 absolute bottom-[25%] rounded-full left-[95.9%] translate-y-1"></div>

         <div id='right-floor-line '
            className="w-[1px] h-[25%] absolute top-[75.5%] left-[4%] -translate-y-1/2 -rotate-[115deg]">
            <div className="h-1/2 bg-white/50"></div>
         </div>
         <div id='left-floor-line'
            className="w-[1px] h-[25%] absolute top-[75.5%] left-[95.9%] -translate-y-1/2 rotate-[115deg]">
            <div className="h-1/2 bg-white/50"></div>
         </div>
      </>
   )
}

export default Edges