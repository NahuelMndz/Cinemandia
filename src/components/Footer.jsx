import React from 'react'
import iconfooter from '../Images/iconfooter.svg'
function Footer() {
  return (
    <>
    <div className='bg-[#032541] flex items-center justify-center p-5'>
        <a href="https://developer.themoviedb.org/docs/getting-started">
        <img className='w-10 mr-[20px]' src={iconfooter} alt="icon" />
        </a>
        <p className='text-white font-[600] text-sm'><a href="https://github.com/NahuelMndz">@NahuelMndz 2025 </a></p>
    </div>
    </>
  )
}

export default Footer