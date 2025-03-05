import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection"
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Link } from 'react-scroll'

const App = () => {
  return (

    <div className='w-full'>
      <div className='w-[90vw] m-auto'>
        <Navbar />
        <HeroSection />
      </div>
      <About />
      <h1 className="font-bold text-3xl mt-[4rem]">My Recent Projects</h1>
      <p className='mt-[1rem] text-xl'>Here are few past projects that I've worked on. Want to work together on next one? <span><Link smooth={true} duration={500} className='text-blue-400 cursor-pointer hover:text-blue-600' to='contact'>Contact me</Link>.</span></p>
      <Projects />
      <Contact/>
      <Footer />
    </div>

  )
}

export default App
