import React from 'react'
import loading from '../images/loading.gif'

function Loader() {
  return (
    <>
    <div className="absolute w-[100%]  z-[10000] h-[100vh]">
             <div className=" blink-bg opacity-60 bg-[rgb(255,219,175)] absolute w-full  h-[100vh]"></div>
             <div className='flex h-[100vh] justify-center items-center'>
            <img className='z-20 blink-img relative w-32' src={loading} alt="" />
        </div>
       </div>
    </>
  )
}

export default Loader