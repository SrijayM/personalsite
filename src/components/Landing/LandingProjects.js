import React from 'react'
import { aichatbot, pintrest, snake, gunter, personalsite, employee, youtubeapp, ecommerceadmin, ecommercefront } from "../../assests";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '75%',
    maxHeight: '80%',
    overflow: 'auto',
    transition: 'all'
    },
};
export default function LandingProjects() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalName, setModalName] = React.useState("");

  function openModal(type) {
    setIsOpen(true);
    setModalName(type);
    document.body.style.overflow = 'hidden'; // Lock scroll

  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Restore scroll

  }

const projects =[
  {
    name: " Ecommerce Site (User)",
    tools: "Next.js, React.js, Styled Components, Stripe API ",
    image: ecommercefront,
    description: "This application is a full-stack customer-facing e-commerce site where users can purchase products listed through the admin panel. It allows users to view, add to a cart and purchase various assortments and quantities of products. The front end is built using Next.js and is styled using the styled component library. The data is fetched from a MongoDB backend where the JSON return is parsed and displayed. These products are displayed with all of their information along with a random feature product shown on the front page. Purchases are handled using Stripe API and the purchase data is stored in the MongoDB database. ",
    githubLink: "https://github.com/SrijayM/ecommerce-front",
    videoLink: "https://www.youtube.com/watch?v=I7jtYYjxKgU"
  },
  {
    name: "Ecommerce Site (Admin)",
    image: ecommerceadmin,
    description: "This application is a full-stack admin panel developed to manage an e-commerce website. The application allows users to primarily create, edit, delete and categorize various products. Each product can be customized with its own name, price, images, and description and can be put into categories to be shown with similar items. The admin panel has Google sign-in authentication, meaning only users of verified accounts can access and make changes within it. Users of the admin panel can also track orders made through the user-facing site with Stripe. The front end is built using Next.js and styled using Tailwind CSS. The back-end including all models, queries and mutations is built using Node.js. MongoDB is used as the database to store information and Amazon AWS is used to store images. ",
    githubLink: "https://github.com/SrijayM/ecommerce-admin",
    tools: "Next.js, React.js, Node.js, Tailwind CSS, Mongo DB, Amazon AWS",
    videoLink: "https://www.youtube.com/watch?v=I7jtYYjxKgU"
  },
  {
    name: "Ai-Chatbots",
    image: aichatbot,
    description: "This is a full-stack AI Companion website developed using Next.js with React, and styled with Tailwind CSS for dynamic, responsive user interfaces. The application features a subscription-based service model, integrated with Stripe for secure payment processing which allows users to create their own chatbots by paying. Prisma’s object-relational mapping capabilities, in conjunction with MySQL’s robust database management, are leveraged to provide a backend for the website. The incorporation of AI functionality from Replicate, allows users to interact with and create their own custom chatbots, offering a personalized and interactive user experience. Account creation is handled through Google using Clerk authentication.",
    githubLink: "https://github.com/SrijayM/ai-chatbots",
    tools: "Next.js, React.js, Tailwind CSS, Elephant SQL, Stripe, Prisma, Replicate API",
    videoLink: "https://youtu.be/k-WOiunH_Qs"
  },
  {
    name: "Youtube Clone",
    image: youtubeapp,
    description: "A front-end Youtube clone that leverages Google's Youtube API and mimics many Youtube features. Leveraging Node.js with Axios, a robust REST API is integrated with the React front-end. Incorporated YouTube Data API endpoints to enable the retrieval and dynamic display of video metadata, user details, and recommended videos. The project also prioritized user accessibility through the implementation of a responsive design, coupled with optimized loading times.",
    githubLink: "https://github.com/SrijayM/youtube_app",
    webpageLink: "https://srijay-youtube-app.netlify.app/",
    tools: "React.js, REST API, CSS, HTML5"

  },
  {
    name: "This Website",
    image: personalsite,
    description: "This webpage is developed to showcase information about my development experience, pertaining to my skills, side-projects and work experience. The website features links to my LinkedIn, GitHub and resume along with sections listing my development-related experience. It also features modal pop-ups to get more information related to each specific side-project and links to repositories and video demonstrations. The site is developed using React.js and HTML and uses Tailwind CSS for styling.",
    githubLink: "https://github.com/SrijayM/personalsite",
    tools: "React.js, Tailwind CSS, HTML5"
  },
  {
    name: "Employee Dashboard Manager",
    image: employee,
    description: "This is an employee management system that allows users to manage departments and employees within an organization. Departments can be created, edited, and deleted for employee organization. Employees can be created, deleted and edited with various parameters. Uses a Django-Python-based backend with custom models, serializers and HTTP request handling. React.js front-end displays data from the backend and provides an interactive median for users to manage data.",
    githubLink: "https://github.com/SrijayM/EmployeeAPI",
    videoLink: " https://youtu.be/YHbvhYIKfqo",
    tools: "React.js, Python, Django, SQL, Git",
  },
  {
    name: "Pinterest  Clone",
    image: pintrest,
    description: "This is an application developed that replicates the features and style of the image-sharing site Pinterest. The application is primarily developed using React.js and HTML and styled using CSS. The site allows users to upload custom photos or embed them from other websites. The images are displayed dynamically on the webpage and are responsive to all devices.",
    githubLink: "https://github.com/SrijayM/pintrest-sm",
    tools: "React.js, CSS, HTML5",
  },
  {
    name: "Obstacle Avoidance Game",
    image: gunter,
    description: "This is an interactive game where players are tasked with controlling a character and avoiding the viruses. The player uses the arrow keys to move the character around the game-area with the goal being survive as long as possible. This game is developed using Java's Abstract Window Tool kit to create the graphical user interface. The game uses custom sprites and features multiple sprites and skins that players can select.",
    githubLink: "https://github.com/SrijayM/Run-Gunter-Run",
    tools: "Java",
  }
]

  return (
    <div className='font-poppins px-60 xl:px-72 2xl:px-96 pb-24'>
      <h1 className='text-2xl font-bold mb-8'>Side Projects</h1>
      <div className='grid-cols-2 grid gap-10'>
        
        {projects.map((projects, index) => (
          <a onClick={()=>openModal(index)} className="hover:cursor-pointer shadow-xl h-[300px] xl:h-[400px] w-full object-fit flex items-center justify-center relative">
              <img src={projects.image} className='w-3/4 h-auto border-2'/>
              <div className="absolute bg-gray-200 h-full w-full opacity-0 transition-opacity ease-in ease-out duration-300 hover:opacity-90 flex justify-center items-center text-center">
                <p className="text-black font-bold"> {projects.name}</p>
              </div> 
          </a>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button onClick={closeModal} className='float-right'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='font-poppins text-2xl font-bold mb-2 mt-2'>{projects[modalName]?.name}</div>
        <div className='font-poppins mb-2'>
          <p>Language(s)/Tool(s) Used: {projects[modalName]?.tools}</p>
        </div>
        <div className='flex justify-center items-center'>
            <img src={projects[modalName]?.image} className='w-3/4 rounded-sm'/>
        </div>
        <div className='p-4'>
          <p className='indent-16'>{projects[modalName]?.description}</p>
        </div>
        <div className='flex items-center justify-center gap-4 font-poppins'>
          <a
            href={projects[modalName]?.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-400 hover:bg-gray-500 text-black  font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Repository Link
          </a>
          {projects[modalName]?.webpageLink && (
            <a
              href={projects[modalName]?.webpageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded transition duration-50 ease-in-out"
            >
              Webpage Link
            </a>
          )}
          {projects[modalName]?.videoLink && (
            <a
              href={projects[modalName]?.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded transition duration-50 ease-in-out"
            >
              Demo Video Link
            </a>
          )}
        </div>
      </Modal>  
    </div>
  )
}
