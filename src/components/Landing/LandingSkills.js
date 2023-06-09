import React, { useState } from "react";
import { css, cplusplus, git, html, java, javascript, nodejs, react, tailwind, python, matlab, sql,django, c, angular } from "../../assests";
export default function LandingSkills() {

  const proficientIn = [
    { "image": javascript, name: "JavaScript"},
    { "image": react, name: "React.js" },
    { "image": python, name: "Python" },
    { "image": css, name: "CSS" },
    { "image": cplusplus, name: "C++" },
    { "image": tailwind, name: "Tailwind CSS" },
    { "image": angular, name: "Angular"},
    { "image": java, name: "Java" },
    { "image": c, name: "C" },
    { "image": sql, name: "SQL" },
    { "image": django, name: "Django" },
    { "image": git, name: "Git" },
    { "image": html, name: "HTML"},
    { "image": nodejs, name: "Node.js" },
    { "image": matlab, name: "MATLAB" },
];

const semiPro = [
  

];

  return (
    <div className='font-poppins px-72 2xl:px-96 pb-24'> 
        <div>
          <h1 className='text-2xl font-bold mb-8'>Proficient In.</h1>
          <div className='grid-cols-5 grid gap-10'>
          {proficientIn.map((skills) =>( 
              <div className=' hover:cursor-pointer bg-gray-200 h-full w-full object-fit flex items-center justify-center relative'> 
                  <img src={skills.image} className='h-4/6'></img>
                  <div className="absolute bg-gray-200 h-full w-full opacity-0 transition-opacity ease-in ease-out duration-300 hover:opacity-90 flex justify-center items-center">
                  <p className="text-black font-bold">{skills.name}</p>
                  </div> 
              </div>
          ))}
          </div>
        </div>
    </div>
  )
}
