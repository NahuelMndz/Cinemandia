import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Api from '../services/Api';
import ShowCast from './CreditsAll';

function MainActors(item) {

  const {idType, id} = useParams();
  
  const items = item?.movies
  
  return (
    <>
    <div className='p-5'>
      <h1 className='text-center p-5 text-[1.3rem] font-[600]'>Actores Principales</h1>
    <div className='flex flex-wrap items-center justify-center'>
        {items.cast?.slice(0, 6).map((e, i) => <NavLink key={e.id} to={`/person/details/${e.id}`}> <div className='w-35 h-75 m-2 border border-[rgba(227,227,227,1)]' key={i}>
                <img className='w-full h-50 rounded-[5px] ' src={e.profile_path ? `https://image.tmdb.org/t/p/w500${e.profile_path}` : "/no-avatar.png"} alt={e.name} />
                <h1 className='text-[0.9rem] pl-1 pt-1 font-[700]'>{e.name}</h1>
                <h2 className='text-[0.9rem] pl-1'>{e.character}</h2>
            </div>
            </NavLink>
        ) }
   <NavLink to={`/${idType}/detailsAll/${id}`}> <p className='font-[600] text-[1.1rem] p-2'>Ver mas</p></NavLink>
    </div>
    </div>
    </>
  )
}

export default MainActors