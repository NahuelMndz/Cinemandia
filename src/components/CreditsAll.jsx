import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function ShowCast(items) {
  
  const {idType, id} = useParams();

  const cast = items?.movies.cast

  const crew = items?.movies.crew;

const uniqueCrew = React.useMemo(() => {
  if (!crew) return [];

  return Array.from(
    new Map(crew.map(person => [person.id, person])).values()
  );
}, [crew]);

const uniqueCast = React.useMemo(() => {
  if (!crew) return [];

  return Array.from(
    new Map(cast.map(person => [person.id, person])).values()
  );
}, [cast]);

  return (
   <>
   <NavLink to={`/${idType}/details/${id}`} className={'bg-[#14ADE3] text-[white] rounded-[5px] p-2 pl-10 pr-10 mt-5 m-auto text-center text-[1.3rem] font-[400]'}>Volver</NavLink>
   <div className=' lg:w-[80%] lg:m-auto lg:flex lg:justify-center lg:p-20'>
    <div className='w-[50%]'>
      <h3 className='text-center text-[2.3rem] font-[600]'>Equipo</h3>
{uniqueCrew.map(e => (
  <div className='flex m-10 items-center' key={e.id}>
    <img
  className="w-30 h-30 rounded-[5px]"
  src={
    e.profile_path
      ? `https://image.tmdb.org/t/p/w500${e.profile_path}`
      : "/no-avatar.png"
  }
  alt={e.name}/>
  <div className='p-5'>
    <h3 className='text-[1.3rem] font-[700]'>{e.name}</h3>
    <p className='text-[1.1rem]'>{e.department}</p>
  </div>

  </div>
))}
    </div>
    <div className='w-[50%]'>
      <h3 className='text-center text-[2.3rem] font-[600]'>Reparto</h3>
      {uniqueCast.map(e => (
  <div className='flex m-10 items-center' key={e.id}>
    <img
  className="w-30 h-30 rounded-[5px]"
  src={
    e.profile_path
      ? `https://image.tmdb.org/t/p/w500${e.profile_path}`
      : "/no-avatar.png"
  }
  alt={e.name}/>
  <div className='p-5'>
    <h3 className='text-[1.3rem] font-[700]'>{e.name}</h3>
    <p  className='text-[1.1rem]'>{e.character}</p>
  </div>

  </div>
))}
    </div>
   </div>
   </>
  )
}

export default ShowCast