import React from 'react'


// images
import frontend from '../assets/frontend.png'
import backend from '../assets/backend.png'
import tools from '../assets/tools.png'

const About = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-[100%] bg-[#5BE9B9] h-[70vh] pt-[5rem]'>
        <h1 className='text-2xl md:text-3xl text-[#00332A] font-bold'>Hi, I'm Aaditya Bajgain. Nice to meet you.</h1>
        <p className='text-sm md:text-xl text-[#00332A] mt-6'> With a foundation in MERN stack development and a strong belief in hands-on, step-by-step learning, I love building practical, user-focused web applications. My goal is to constantly grow as a developer while creating impactful solutions. When I'm not coding, you can find me exploring new technologies or brainstorming creative ideas to bring projects to life. Welcome to my portfolio—let's create something amazing together!</p>

      </div>
      <div className='bg-[white] w-[90vw] m-auto mt-[-10rem] rounded-[1rem] shadow-lg md:mt-[-9rem]'>
        <div className='flex flex-col md:flex-row justify-between rounded-md'>
          <div className='text-[#00332A] border-b pb-10  md:border-b-0 md:border-r border-gray-200 flex-1'>
            <img className='w-[6rem] m-auto pt-6' src={frontend} />
            <h2 className='text-3xl font-bold text-[#6E07F3]'>Frontend</h2>
            <ul className='mt-2'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className='text-[#00332A] border-b pb-10 md:border-b-0 md:border-r border-gray-200 flex-1'>
            <img className='w-[6rem] m-auto pt-6' src={backend} alt="" />
            <h2 className='text-3xl font-bold text-[#6E07F3]'>Backend</h2>
            <ul className='mt-2'>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div className='text-[#00332A] flex-1 pb-10'>
            <img className='w-[6rem] m-auto pt-6' src={tools} alt="" />
            <h2 className='text-3xl font-bold text-[#6E07F3]'>Tools</h2>
            <ul className='mt-2'>
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
