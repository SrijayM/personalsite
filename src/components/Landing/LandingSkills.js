import React, { useState } from "react";

export default function LandingSkills() {

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className='font-poppins px-72 2xl:p-96 pb-24'> 
        <h1 className='text-2xl font-bold mb-8'>Proficient In.</h1>
        <div className='p-6 grid-cols-5 grid gap-12'>
            <div onMouseEnter={onHover} onMouseLeave={onLeave} className=' hover:cursor-pointer bg-gray-200 h-full w-full object-fit flex items-center justify-center relative'> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" className='h-3/4 '></img>
                {hover ? <div className="absolute bg-cyan-300 h-full w-full opacity-0 transition-opacity ease-in ease-out duration-300 hover:opacity-50 ">JavaScript</div> : <></>}
            </div>
            <div className='bg-black h-10 w-full'></div>
            <div className='bg-black h-10 w-full'></div>
            <div className='bg-black h-10 w-full'></div>
            <div className='bg-black h-10 w-full'></div>
            {/**ADD IMAGE THING WITH LOGOS OF SKILLS ADD FADE OUT */}
        </div>
    </div>
  )
}
