import React, { useState } from "react";
import { css, cplusplus, git, html, java, javascript, nodejs, react, tailwind, python, matlab, sql,django, c, angular, graphql, nextjs } from "../../assests";
export default function LandingSkills() {

  const proficientIn = [
    { "image": javascript, name: "JavaScript"},
    { "image": react, name: "React.js" },
    { "image": angular, name: "Angular"},
    { "image": nextjs, name: "Next.js"},
    { "image": html, name: "HTML"},
    { "image": css, name: "CSS" },
    { "image": tailwind, name: "Tailwind CSS" },
    {"image": graphql, name: "GraphQL"},
    { "image": python, name: "Python" },
    { "image": django, name: "Django" },
    { "image": nodejs, name: "Node.js" },
    { "image": sql, name: "SQL" },
    { "image": git, name: "Git" },
    { "image": java, name: "Java" },
    { "image": cplusplus, name: "C++" },
    { "image": c, name: "C" },
  ];


  return (
    <div className='font-poppins xl:px-72 px-60 2xl:px-96 pb-24'> 
        <div>
          <h1 className='text-2xl font-bold mb-8'>Proficient In.</h1>
          <div className='xl:grid-cols-5 grid-cols-4 grid gap-10'>
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
