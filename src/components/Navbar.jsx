import React, { useState } from 'react'
import { Link } from 'react-scroll'
import git from "../assets/git.png"
import linkedIn from "../assets/linkedIn.png"
import download from "../assets/icons8-download-96.png"
import hamburger from "../assets/icons8-hamburger-menu-480.png"
import x from "../assets/x.png"
import logo from "../assets/logo.png"
import resume from '../assets/resume.pdf'

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
                            <a href={resume} download className='flex align-bottom'>
                                <span>Resume</span>
                            </a>
                        </div>
                    </div>
                    <img className="cursor-pointer w-6 h-5 lg:hidden"
                        src={isMenuOpen ? x : hamburger} alt="hamburger"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </div>
            {isMenuOpen &&
                <div className="hidden md:flex flex-col justify-center items-center gap-1 mt-4 h-[7rem] bg-[#f1f1f1] rounded-md lg:hidden">
                    <a href="https://github.com/AadityaBajgain" className="w-full">
                        <div className="flex gap-2 items-center justify-center cursor-pointer hover:bg-gray-200 py-2">
                            <span className="text-sm">GitHub</span>
                            <img className="w-6" src={git} alt="GitHub Icon" />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/aadityabajgain/" className="w-full">
                        <div className="flex gap-2 items-center justify-center cursor-pointer hover:bg-gray-200 py-2">
                            <span className="text-sm">LinkedIn</span>
                            <img className="w-6" src={linkedIn} alt="LinkedIn Icon" />
                        </div>
                    </a>

                    <a href={resume} download className="w-full">
                        <div className="flex gap-2 items-center justify-center cursor-pointer hover:bg-gray-200 py-2">
                            <span className="text-sm">Resume</span>
                            <img className="w-5 h-5" src={download} alt="Download Resume" />
                        </div>
                    </a>
                </div>
            }

            {isMenuOpen &&
                <div className="flex flex-col justify-center items-center gap-1 mt-4 h-[15rem] bg-[#f1f1f1] rounded-md md:hidden">
                    <ul className="flex flex-col w-full items-center md:hidden">
                        <li className="w-full hover:bg-gray-200 py-2 text-center cursor-pointer">
                            <Link to="about" smooth={true} duration={500} className="block w-full">
                                About Me
                            </Link>
                        </li>
                        <li className="w-full hover:bg-gray-200 py-2 text-center cursor-pointer">
                            <Link to="projects" smooth={true} duration={500} className="block w-full">
                                Projects
                            </Link>
                        </li>
                        <li className="w-full hover:bg-gray-200 py-2 text-center cursor-pointer">
                            <Link to="contact" smooth={true} duration={500} className="block w-full">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <a href="https://github.com/AadityaBajgain" className="w-full">
                        <div className="flex gap-2 items-center justify-center hover:bg-gray-200 py-2">
                            <span className="text-sm">GitHub</span>
                            <img className="w-6" src={git} alt="GitHub Icon" />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/aadityabajgain/" className="w-full">
                        <div className="flex gap-2 items-center justify-center hover:bg-gray-200 py-2">
                            <span className="text-sm">LinkedIn</span>
                            <img className="w-6" src={linkedIn} alt="LinkedIn Icon" />
                        </div>
                    </a>

                    <a href={resume} download className="w-full">
                        <div className="flex gap-2 items-center justify-center hover:bg-gray-200 py-2">
                            <span className="text-sm">Resume</span>
                            <img className="w-5 h-5" src={download} alt="Download Resume" />
                        </div>
                    </a>
                </div>

            }
        </>
    )
}

export default Navbar
