import { faClapperboard, faEarthAmericas, faHouse, faTv, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function MobileMenu({isOpen, setIsOpen}) {

    const asideClasses = `fixed bg-[#032541] w-[60%] top-0 bottom-0 left-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`;
    let navStyle = 'text-white font-[600] text-xl mb-5'


    const toggleMenu = () => {
    if(isOpen === true){
      setIsOpen(false)
    }else if(isOpen === false){
      setIsOpen(true)
    }
    }

  return (
    <>
    <aside className={asideClasses}>
      <div className='h-10 p-5 pt-10 flex items-center justify-end'>
        <button onClick={() => toggleMenu()} className='text-white text-[1.5rem]'><FontAwesomeIcon icon={faXmark} /></button>
      </div>  
      <div className='flex flex-col p-5 mt-15'>
        <NavLink className={navStyle} to={'/'}> <span><FontAwesomeIcon icon={faHouse} /></span> Inicio</NavLink>
        <NavLink className={navStyle} to={'/movies'}> <span><FontAwesomeIcon icon={faClapperboard} /></span> Películas</NavLink>
        <NavLink className={navStyle} to={'/tv'}> <span><FontAwesomeIcon icon={faTv} /></span> Series</NavLink>
        <NavLink className={navStyle} to={'/actors'}> <span><FontAwesomeIcon icon={faUser} /></span> Personas</NavLink>
        <NavLink className={navStyle}  to={'/aboutus'}> <span><FontAwesomeIcon icon={faEarthAmericas} /></span> Sobre Nosotros</NavLink>
      </div>
    </aside>
    </>
  )
}

export default MobileMenu