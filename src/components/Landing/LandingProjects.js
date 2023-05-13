import React from 'react'
import { pintrest, snake, gunter } from "../../assests";


export default function LandingProjects() {
  return (
    <div className='font-poppins px-72 2xl:px-96 pb-24'>
      <h1 className='text-2xl font-bold mb-8'>Side Projects</h1>
      <div className='grid-cols-2 grid gap-10'>

        <a href="https://github.com/SrijayM/pintrest-sm" className="hover:cursor-pointer bg-gray-200 h-[400px] w-full object-fit flex items-center justify-center relative">
          <img src={pintrest} className='w-3/4 h-auto'/>
          <div className="absolute bg-gray-200 h-full w-full opacity-0 transition-opacity ease-in ease-out duration-300 hover:opacity-90 flex justify-center items-center">
            <p className="text-black font-bold">React Pintrest Clone</p>
          </div> 
        </a>
        <a href="https://github.com/SrijayM/Snake" className="hover:cursor-pointer bg-gray-200 h-[400px] w-full object-fit flex items-center justify-center relative">
          <img src={snake} className='w-3/4 h-auto'/>
          <div className="absolute bg-gray-200 h-full w-full opacity-0 transition-opacity ease-in ease-out duration-300 hover:opacity-90 flex justify-center items-center">
            <p className="text-black font-bold">Javascript Snake Game</p>
          </div> 
        </a>
        <a href="https://github.com/SrijayM/Run-Gunter-Run" className="hover:cursor-pointer bg-gray-200 h-[400px] w-full object-fit flex items-center justify-center relative">
          <img src={gunter} className='w-3/4 h-auto'/>
          <div className="absolute bg-gray-200 h-full w-full opacity-0 transition-opacity ease-in ease-out duration-300 hover:opacity-90 flex justify-center items-center">
            <p className="text-black font-bold">Java Obstacle Avoidance Game</p>
          </div> 
        </a>
      </div>
    </div>
  )
}
