import React from 'react'
import Image from 'next/image'

const Masthead = () => {
    return (
        <div className="min-h-screen flex felx-col items-center justify-center"> 
        

            <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className="mb-6 text-4xl xl:text-5xl"> Expert Witness Profiler </h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span> Expert witness stuff, </span> <span> done right.</span>
                </h2>
          </div>
        </div>
    )
}
export default Masthead