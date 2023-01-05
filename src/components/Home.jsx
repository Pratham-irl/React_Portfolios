import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name= 'home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-300'>Hi, this is</p>
            <h1 className='text-4xl sm:text-4xl font-bold text-[#ccd6f6]'>Pratham Pachchigar</h1>
            <h2 className='text-4xl sm:text-2xl font-bold text-[#8892b0]'>trying to be a Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>A motivated IT student with an aptitude for technology, 
                expertise in advanced development methodologies and 
                well versed in modern programming languages and tools.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-green-500 hover:border-green-500'>View Work
            <span className='group-hover:rotate-90 duration-200'>
            <HiArrowNarrowRight className='ml-3'/>
            </span> 
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home