import React from 'react'

// images
import frontend from '../assets/frontend.png'
import backend from '../assets/backend.png'
import tools from '../assets/tools.png'

const About = () => {
  return (
    <div className='w-full h-full '>
      <div className='w-full bg-[#5BE9B9] px-4 md:px-8 lg:px-16 pt-12 pb-32 md:pt-16 md:pb-36 lg:pt-20 lg:pb-40'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#00332A] font-bold max-w-4xl mx-auto'>
          Hi, I'm Aaditya Bajgain. Nice to meet you.
        </h1>
        <p className='text-sm sm:text-base lg:text-xl text-[#00332A] mt-4 md:mt-6 lg:mt-8 max-w-4xl mx-auto leading-relaxed'>
        A software development enthusiast currently studying at Cerritos College. With a strong passion for AI and full-stack development, I enjoy building intuitive applications using Python, React, and various modern technologies. I'm always eager to learn, collaborate, and explore innovative solutions that push the boundaries of technology. Let’s connect and build something impactful!
        </p>
      </div>

      <div className='bg-white w-[90%] mx-auto mt-[-6rem] md:mt-[-8rem] lg:mt-[-6rem] rounded-xl shadow-xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-8'>
          <div className='text-[#00332A] border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6'>
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

          <div className='text-[#00332A] border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6'>
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
