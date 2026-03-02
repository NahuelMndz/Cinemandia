import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../Images/logo4.png.PNG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navList = 'mr-7 font-[400]';

  
  const toggleMenu = () => {
    if(isOpen === true){
      setIsOpen(false)
    }else if(isOpen === false){
      setIsOpen(true)
    }
  }

  return (
    <>
    <div className='bg-[#032541] flex justify-between items-center p-3 sm:justify-around sm:p-5'>
      <div className=''> 
        <NavLink className={'flex text-white items-center'} to={'/'}><img className='w-9 h-8 ml-3 mr-2' src={logo} alt="icon" />Cinemandia</NavLink>
      </div>
      <div className='hidden text-white sm:block'>
        <NavLink className={navList} to={'/'}>Inicio</NavLink>
        <NavLink className={navList} to={'/movies'}>Películas</NavLink>
        <NavLink className={navList} to={'/tv'}>Series</NavLink>
        <NavLink className={navList} to={'/actors'}>Personas</NavLink>
        <NavLink className={navList} to={'/aboutus'}>Sobre Nosotros</NavLink>
      </div>
      <div className='sm:hidden'>
        <button onClick={() => toggleMenu()} className='text-white mr-3npm text-[1.5rem]'><FontAwesomeIcon icon={faBars}/></button>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
    </>
  )
}

export default Navbar



// bg-[#032541]