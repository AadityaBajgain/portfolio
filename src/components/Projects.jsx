import React from 'react'
import moneymap from "../assets/moneymap.png"
import ytClone from "../assets/ytClone.png"
import prepai from "../assets/prepai.png"
const Projects = () => {
  return (
   <div id="projects" className='w-[95%] max-w-7xl flex flex-wrap gap-8 mx-auto my-10 justify-center transition-all duration-300'>
    <a href='https://github.com/AadityaBajgain/MoneyMap' className='w-[80vw] sm:w-[45%] lg:w-[30%] transition-transform duration-300 hover:scale-102'>
      <div className='h-[30vh] sm:h-[40vh] border-2 border-slate-200 rounded-lg relative group overflow-hidden'>
        <img className="w-full h-full object-cover blur-[2px] group-hover:blur-[4px] transition-all" src={moneymap} alt="MoneyMap" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-gray-600 text-2xl font-bold z-10">MoneyMap</h3>
        </div>
      </div>
    </a>
    <a href='https://github.com/AadityaBajgain/YT-clone' className='w-[80vw] sm:w-[45%] lg:w-[30%] transition-transform duration-300 hover:scale-102'>
      <div className='h-[30vh] sm:h-[40vh] border-2 border-slate-200  rounded-lg relative group'>
      <img className="w-full h-full object-cover blur-[2px] group-hover:blur-[4px] transition-all" src={ytClone} alt="Youtube Clone" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-gray-600 text-2xl font-bold">Youtube Clone</h3>
        </div>
      </div>
    </a>
    <a href='https://github.com/BarsatKhadka/PrepAI' className='w-[80vw] sm:w-[45%] lg:w-[30%] transition-transform duration-300 hover:scale-102'>
      <div className='h-[30vh] sm:h-[40vh] border-2 border-slate-200 rounded-lg relative group'>
        <img className="w-full h-full object-cover blur-[2px] group-hover:blur-[4px] transition-all" src={prepai} alt="Youtube Clone" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-gray-600 text-2xl font-bold">PrepAI</h3>
        </div>
      </div>
    </a>
   </div>
  )
}
export default Projects
