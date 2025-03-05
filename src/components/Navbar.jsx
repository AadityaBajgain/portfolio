import React, { useState } from 'react'
import { Link } from 'react-scroll'
import git from "../assets/git.png"
import linkedIn from "../assets/linkedIn.png"
import download from "../assets/icons8-download-96.png"
import hamburger from "../assets/icons8-hamburger-menu-480.png"
import x from "../assets/x.png"
import logo from "../assets/logo.png"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className='flex justify-between'>
                <div className='mx-3'>
                    <img src={logo} className='w-[5rem]' />
                </div>

                <div className='flex justify-between items-center mx-3'>

                    <ul className='hidden md:flex text-[1rem] gap-2 mr-4' >
                        <li><Link to="about" smooth={true} duration={500} className='cursor-pointer'>About Me</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} className='cursor-pointer'>Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className='cursor-pointer'>Contact</Link></li>
                    </ul>
                    <div className='hidden lg:flex'>
                        <div className='mx-1'><a href="https://github.com/AadityaBajgain"><img className="w-6 cursor-pointer" src={git} alt="git" /></a></div>
                        <div className='mx-1'><a href="https://www.linkedin.com/in/aadityabajgain/"><img className="w-6 cursor-pointer" src={linkedIn} alt="In" /></a></div>
                        <div className='mx-1'>
                            <span className='flex align-bottom'>Resume</span>
                        </div>
                    </div>
                    <img className="cursor-pointer w-6 h-5 lg:hidden"
                        src={isMenuOpen ? x : hamburger} alt="hamburger"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </div>
            {isMenuOpen &&
                <div className="hidden md:flex flex-col justify-center items-center gap-4 mt-4 h-[7rem] bg-[#f1f1f1] rounded-md lg:hidden">


                    <a href="https://github.com/AadityaBajgain"><div className="flex gap-2 w-full items-center justify-center cursor-pointer ">
                       =<span className="text-sm">GitHub</span>
                        <img className="w-6 cursor-pointer" src={git} alt="GitHub Icon" />
                    </div></a>


                    <a href="https://www.linkedin.com/in/aadityabajgain/"><div className="flex w-full gap-2 items-center justify-center cursor-pointer">
                        <span className="text-sm">LinkedIn</span>
                        <img className="w-6 cursor-pointer" src={linkedIn} alt="LinkedIn Icon" />
                    </div></a>


                    <div className="flex w-full gap-2 items-center justify-center cursor-pointer ">
                        <span className="text-sm">Resume</span>
                        <img className="w-5 h-5 mt-0.5 cursor-pointer" src={download} alt="Download Resume" />
                    </div>
                </div>
            }
            {isMenuOpen &&
                <div className="flex flex-col justify-center items-center gap-4 mt-4 h-[15rem] bg-[#f1f1f1] rounded-md md:hidden">
                    <ul className="flex flex-col gap-2 w-full items-center md:hidden">
                        <li><Link to="about" smooth={true} duration={500} className="cursor-pointer w-full hover:shadow-md text-center">About Me</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer w-full hover:shadow-md text-center">Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer w-full hover:shadow-md text-center">Contact</Link></li>
                    </ul>

                    <div className="flex gap-2 w-full items-center justify-center cursor-pointer hover:shadow-md">
                        <span className="text-sm">GitHub</span>
                        <img className="w-6 cursor-pointer" src={git} alt="GitHub Icon" />
                    </div>


                    <div className="flex w-full gap-2 items-center justify-center cursor-pointer hover:shadow-md">
                        <span className="text-sm">LinkedIn</span>
                        <img className="w-6 cursor-pointer" src={linkedIn} alt="LinkedIn Icon" />
                    </div>


                    <div className="flex w-full gap-2 items-center justify-center cursor-pointer hover:shadow-md">
                        <span className="text-sm">Resume</span>
                        <img className="w-5 h-5 mt-0.5 cursor-pointer" src={download} alt="Download Resume" />
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar
