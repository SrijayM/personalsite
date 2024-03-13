import React from 'react'
import { andie, defaults, sairyo, zebra } from "../../assests"

export default function LandingWork() {

  const jobs = [
    {
      image: sairyo,
      title: 'Full Stack Developer',
      company: 'SAIRYO',
      date: 'September 2023 – December 2023',
      description: ""
    },
    {
      image: andie,
      title: 'Software Developer',
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
    <div className='font-poppins px-60 xl:px-72 2xl:px-96 pb-24 just'>
      <h1 className="text-2xl font-bold mb-8">My Work Experience</h1>
      <div className="p-8 container mx-auto  bg-gray-200 px-8 pb-8 w-[100%] relative">
        <div className='flex'>
          <div className='bg-white w-[40%] xl:w-[45%] pb-2 rounded-sm relative'>
            <div className='p-4 text-md'>
              <h1 className='text-2xl font-bold'>Full Stack Developer</h1>
              <h2 className='text-lg font-bold text-slate-700 mb-1'>SAIRYO</h2>
              <div className='p-2'>
                <p className='text-gray-500 m-1'>• Utilized Angular to develop front-end web-pages and components for a live-streaming service</p>
                <p className='text-gray-500 m-1'>• Implemented efficient back-end queries and mutations using GraphQL and Node.js, to optimize site performance</p>
                <p className='text-gray-500 m-1'>• Developed back-end code for both web and mobile versions of the product, communicating with various teams throughout</p>
                <p className='text-gray-500 m-1'>• Revamped the Stripe transaction service on the entire site and fixed various bugs within this service</p>
                <p className='text-gray-500 m-1'>• Optimized the MYSQL database for efficient user and site data storage, leveraging AWS for streamlined large file storage</p>
                <p className='text-gray-500 m-1'>• Helped manage CI/CD pipeline by approving and merging pull requests from other developers</p>
              </div>
            </div>
            <div className='w-full bg-gray-500 h-[10px] absolute bottom-0 rounded-b-md'/>
          </div>
        </div>
        <div className='h-[100%] w-[6px] bg-white absolute top-0 left-0 right-0 ml-auto mr-auto'/>
        <div className='absolute top-[10%] left-0 right-0 ml-auto mr-auto flex items-center justify-center'>
              <img src={sairyo} className='rounded-full w-16 border-4 border-white'/>
        </div>
        <div className='absolute top-[15%] right-[25%] transform translate-x-1/2 font-bold text-sm'>
          September 2023 – December 2023
        </div>
      </div>

      <div className="p-8 container mx-auto  bg-gray-200 px-8 pb-8 w-[100%] relative">
        <div className='flex'>
          <div className=' bg-white w-[40%] xl:w-[45%] pb-2 rounded-sm relative'>
            <div className='p-4 text-md'>
              <h1 className='text-2xl font-bold'>Software Developer</h1>
              <h2 className='text-lg font-bold text-slate-700 mb-1'>Andie Connected Technologies</h2>
              <div className='p-2'>
                <p className='text-gray-500 m-1'>• Developed and maintained multiple web applications using React.js, Tailwind CSS, HTML, and Node.js</p>
                <p className='text-gray-500 m-1'>• Worked with third-party APIs to integrate external services into the Andie web application to enhance user experience </p>
                <p className='text-gray-500 m-1'>• Improved web-page performance by optimizing load sequences to reduce load times by up to 68%</p>
                <p className='text-gray-500 m-1'>• Integrated the front-end to the back-end data for the Andie web application using RESTful APIs</p>
                <p className='text-gray-500 m-1'>• Collaborated with various departments to enhance web-page readability by discussing layouts and improvements</p>
              </div>
            </div>
            <div className='w-full bg-gray-500 h-[10px] absolute bottom-0 rounded-b-md'/>
          </div>
        </div>
        <div className='h-[100%] w-[6px] bg-white absolute top-0 left-0 right-0 ml-auto mr-auto'/>
        <div className='absolute  top-[10%] left-0 right-0 ml-auto mr-auto flex items-center justify-center'>
              <img src={andie} className='bg-white rounded-full w-16 border-4 border-white z-50'/>
        </div>
        <div className='h-[20px] w-fit absolute top-[15%] right-[25%] transform translate-x-1/2 font-bold text-sm'>
        January 2023 – April 2023
        </div>
      </div>

      <div className="p-8 container mx-auto  bg-gray-200 px-8 pb-8 w-[100%] relative">
        <div className='flex'>
          <div className=' bg-white w-[40%] xl:w-[45%] pb-2 rounded-sm relative'>
            <div className='p-4 text-md'>
              <h1 className='text-2xl font-bold'>Junior CAD Drafter</h1>
              <h2 className='text-lg font-bold text-slate-700 mb-1'>CBM GROUP</h2>
              <div className='p-2'>
                <p className='text-gray-500 m-1'>• Implemented markups of plumbing, electrical and HVAC systems into architectural drawings using AutoCAD</p>
                <p className='text-gray-500 m-1'>• Calculated flow rates for plumbing systems and selected appropriate diameter piping</p>
                <p className='text-gray-500 m-1'>• Improved drafting efficiency by streamlining the markup to drafting process between coworkers</p>
              </div>
            </div>
            <div className='w-full bg-gray-500 h-[10px] absolute bottom-0 rounded-b-md'/>
          </div>
        </div>
        <div className='h-[100%] w-[6px] bg-white absolute top-0 left-0 right-0 ml-auto mr-auto'/>
        <div className='absolute  top-[10%] left-0 right-0 ml-auto mr-auto flex items-center justify-center'>
              <img src={defaults} className='bg-white rounded-full w-16 border-4 border-white'/>
        </div>
        <div className='h-[20px] w-fit absolute top-[15%] right-[25%] transform translate-x-1/2 font-bold text-sm'>
          May 2022 – August 2022
        </div>
      </div>

      <div className="p-8 container mx-auto  bg-gray-200 px-8 pb-8 w-[100%] relative">
        <div className='flex'>
          <div className=' bg-white w-[40%] xl:w-[45%] pb-2 rounded-sm relative'>
            <div className='p-4 text-md'>
              <h1 className='text-2xl font-bold'>Teaching Assistant</h1>
              <h2 className='text-lg font-bold text-slate-700 mb-1'>ZEBRA ROBOTICS</h2>
              <div className='p-2'>
                <p className='text-gray-500 m-1'>• Taught and mentored an FLL team through the robotics aspect of the competition to the provincial level</p>
                <p className='text-gray-500 m-1'>• Planned lessons and activities to teach elementary and middle school students about robotics</p>
                <p className='text-gray-500 m-1'>• Used knowledge of Lego EV3 robotics kits to teach students about line following, colour detection and programming</p>
              </div>
            </div>
            <div className='w-full bg-gray-500 h-[10px] absolute bottom-0 rounded-b-md'/>
          </div>
        </div>
        <div className='h-[100%] w-[6px] bg-white absolute top-0 left-0 right-0 ml-auto mr-auto'/>
        <div className='absolute  top-[10%] left-0 right-0 ml-auto mr-auto flex items-center justify-center'>
              <img src={zebra} className='bg-white rounded-full w-16 border-4 border-white'/>
        </div>
        <div className='h-[20px] w-fit absolute top-[15%] right-[25%] transform translate-x-1/2 font-bold text-sm'>
          June 2018 – June 2021        
        </div>
      </div>

    </div>
  )
}

/*
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
*/