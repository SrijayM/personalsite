import React from 'react'

export default function LandingSkills() {
  return (
    <div className='font-poppins px-96 pb-24'> 
        <h1 className='text-2xl font-bold mb-8'>Proficient In.</h1>
        <div className='p-6 grid-cols-5 grid gap-12'>
            <div className='bg-gray-200 h-full w-full object-fit flex items-center justify-center relative hover:bg-gray-400 hover:opacity-50 transition '> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" className='h-3/4 '></img>

            </div>
            <div className='bg-black h-10 w-full'></div>
            <div className='bg-black h-10 w-full'></div>
            <div className='bg-black h-10 w-full'></div>
            <div className='bg-black h-10 w-full'></div>
            {/**ADD IMAGE THING WITH LOGOS OF SKILLS */}
        </div>
    </div>
  )
}
