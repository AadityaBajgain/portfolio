import React from 'react'

// images
import frontend from '../assets/frontend.png'
import backend from '../assets/backend.png'
import tools from '../assets/tools.png'

const About = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full bg-[#5BE9B9] min-h-[70vh] px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#00332A] font-bold max-w-4xl mx-auto'>
          Hi, I'm Aaditya Bajgain. Nice to meet you.
        </h1>
        <p className='text-sm sm:text-base lg:text-xl text-[#00332A] mt-4 md:mt-6 lg:mt-8 max-w-4xl mx-auto leading-relaxed'>
          With a foundation in MERN stack development and a strong belief in hands-on, step-by-step learning, I love building practical, user-focused web applications. My goal is to constantly grow as a developer while creating impactful solutions. When I'm not coding, you can find me exploring new technologies or brainstorming creative ideas to bring projects to life. Welcome to my portfolio—let's create something amazing together!
        </p>
      </div>

      <div className='bg-white w-[95%] sm:w-[90%] mx-auto mt-[-3rem] sm:mt-[-5rem] md:mt-[-7rem] lg:mt-[-9rem] rounded-xl shadow-xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8'>
          <div className='text-[#00332A] border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0'>
            <img className='w-16 sm:w-20 lg:w-24 mx-auto pt-4' src={frontend} alt="Frontend" />
            <h2 className='text-2xl sm:text-3xl font-bold text-[#6E07F3] mt-4'>Frontend</h2>
            <ul className='mt-4 space-y-2 text-sm sm:text-base'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className='text-[#00332A] border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0'>
            <img className='w-16 sm:w-20 lg:w-24 mx-auto pt-4' src={backend} alt="Backend" />
            <h2 className='text-2xl sm:text-3xl font-bold text-[#6E07F3] mt-4'>Backend</h2>
            <ul className='mt-4 space-y-2 text-sm sm:text-base'>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          <div className='text-[#00332A]'>
            <img className='w-16 sm:w-20 lg:w-24 mx-auto pt-4' src={tools} alt="Tools" />
            <h2 className='text-2xl sm:text-3xl font-bold text-[#6E07F3] mt-4'>Tools</h2>
            <ul className='mt-4 space-y-2 text-sm sm:text-base'>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
