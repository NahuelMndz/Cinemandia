import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

function MovieCredits(items) {

  const item = items?.movies.cast
  const {idType, id} = useParams();

  return (    
    <>
    <div className='' >
        <h3 className='text-[1.3rem] font-[600] mb-4 text-center lg:text-start'>Conocido/a por</h3>
        <div className='flex flex-wrap justify-center '>
          {item?.slice(0, 6).map(e => <NavLink key={e.id} to={`/${e.media_type}/details/${e.id}`}>  <div className='w-[130px] h-[200px] m-2 mb-15' key={e.id}>
            <img className='w-full h-full rounded-[10px]'  src={e.poster_path ? `https://image.tmdb.org/t/p/w500${e.poster_path}` : "/no-movie.png"} alt="" />
            <p className='text-center p-1 text-[0.9rem]'>{e.name || e.title}</p>
          </div>
          </NavLink>
          )}
        </div>
    </div>
    </>
  )
}

export default MovieCredits
