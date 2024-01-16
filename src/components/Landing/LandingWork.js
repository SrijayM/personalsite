import React from 'react'
import { andie, defaults, sairyo, zebra } from "../../assests"

export default function LandingWork() {

  const jobs = [
    {
      image: sairyo,
      title: 'Software Developer',
      company: 'SAIRYO',
      date: 'September 2023 – December 2023',
      description: ""
    },
    {
      image: andie,
      title: 'Software Engineer',
      company: 'Andie Connected Technologies',
      date: 'January 2023 – April 2023',
      description: '',
    },
    {
      image: defaults,
      title: 'Junior CAD Drafter',
      company: 'CBM GROUP',
      date: 'May 2022 – August 2022',
      description: '',
    },
    {
      image: zebra,
      title: 'Teaching Assistant',
      company: 'ZEBRA ROBOTICS',
      date: 'June 2018 – June 2021',
      description: '',
    },
  ];
  return (
    <div className='font-poppins px-60 xl:px-72 2xl:px-96 pb-24'>
      <h1 className="text-2xl font-bold mb-8">My Work Experience</h1>
      <div className="container mx-auto  bg-gray-200 px-8   pb-8">
        <div className="flex flex-col ">
          {jobs.map((job, index) => (
            <div key={index} className="mt-8">
              <div className='flex'>
                <img src={job.image} className='w-12 h-auto mr-4 rounded-lg' />
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
              </div>
              <p className="text-gray-500 mt-1">{job.date}</p>
              <p className="mt-1" >{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  )
}

