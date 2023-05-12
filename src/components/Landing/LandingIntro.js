import React from 'react'

export default function LandingIntro() {
  return (
    <div className='py-36 px-96 font-poppins flex justify-between items-center'>
        <div className='flex justify-center items-center'>
            <div className='max-w-lg '>
                <h1 className='text-4xl font-bold mb-2'>Hello, I am Srijay Mundlur</h1>
                <p>I am a second year Mechatronics student at the University of Waterloo interested in a career in fullstack development.</p>
            </div>
        </div>
        <div className='w-[400px] h-[400px] rounded-full object-cover overflow-hidden'>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className=''></img>

        </div>
    </div>
  )
}
