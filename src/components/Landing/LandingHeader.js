import React, { Component } from 'react';
import resume from "../../assests/resumewebsite.pdf"

export default function LandingHeader() {
  return (
    <nav className="border-b border-black h-16 align-bottom flex items-center justify-center ">
      <div className="flex justify-between items-right w-1/2">
        <p  className="text-gray-700 px-3 py-2 text-sm font-bold font-poppins text-xl">Srijay Mundlur</p>
        <div className="flex space-x-4 ">
          <a href="https://github.com/SrijayM" className="text-gray-700 hover:text-gray-300 px-3 py-2 text-sm font-bold font-poppins flex justify-center items-center text-lg">GitHub</a>
          <a href="https://www.linkedin.com/in/srijaymundlur/ " className="text-gray-700 hover:text-gray-300 px-3 py-2 text-sm font-bold font-poppins flex justify-center items-center text-lg">LinkedIn</a>
          <a href = {resume} target = "_blank" className="text-gray-700 hover:text-gray-300 px-3 py-2 text-sm font-bold font-poppins flex justify-center items-center text-lg">Resume</a>
        </div>
        
      </div>
    </nav>
  )
}
