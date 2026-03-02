import React from 'react'
import { NavLink } from 'react-router-dom'

function Credits(items) {

  const item = items.movies.cast

  return (
    <>
    <div className='mt-10 mb-10 p-2 lg:w-[70%] lg:m-auto'>
      <h2 className='text-[1.3rem] font-[600] mb-3'>Actuando</h2>
      {item?.map((e, i)=> <div className='mb-2 w-full h-[90px] flex flex-col justify-center border-t border-[rgba(24,5,5,0.2)]' key={i}>
        <NavLink key={e.id} to={`/${e.media_type}/details/${e.id}`}><p className='text-[1.1rem] font-[700]'>{e.name || e.title}</p></NavLink>
        {e.episode_count ? e.episode_count > 1 ? <p className='text-[#7A7777]'>{e.episode_count} episodios como <span className='text-black font-[600]'>{e.character}</span></p> : <p className='text-[#7A7777]' >{e.episode_count} episodio como <span className='text-black font-[600]'>{e.character}</span></p>: <p className='text-[#7A7777]'>como <span className='text-black font-[600]'>{e.character}</span> </p>}</div>
          )}
    </div>
    </>
  )
}

export default Credits