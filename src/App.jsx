import { useState } from 'react'
import  backgroundHome  from './assets/vistaMobile/fondo.png'
import menu from './assets/vistaWeb/Menu.svg'
import logo from './assets/vistaWeb/Logo.svg'

function App() {
  

  return (
    <>
    
      <div className="flex flex-col relative items-center">
      <img src={backgroundHome} alt="" className='w-full h- sm:w-screen 2xl:w-screen'  />
      <nav className='flex justify-between w-full absolute ps-3  pr-5 sm:mt-3 sm:ps-3 sm:pr-5 2xl:mt-8 2xl:ps-11 2xl:pr-11'>
        <img src={menu} className='w-14' alt="" />
        <img src={logo} className='w-14  left-3 sm:w-14  2xl:w-24  '  alt="" />
      </nav>
      <div className="absolute flex flex-col ms-5 mr-5 top-64 sm:top-64 items-center">

        <h1 className='text-white font-roboto font-bold text-4xl text-center'>Your favorite comic book store</h1>
        <p className='text-center ps-1 pr-1 mt-6 text-white font-roboto text-xs'>From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
        <a href="" className='mt-6 text-white bg-purple w-80 h-16 flex flex-col justify-center text-center rounded-full text-2xl font-bold'>Started</a>


      </div>
      <footer>
        
      </footer>


      </div>

      
      
    </>
  )
}

export default App
