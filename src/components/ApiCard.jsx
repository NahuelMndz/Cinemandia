import React from 'react'
import ApiList from './ApiList'
import { NavLink } from 'react-router-dom';

function ApiCard({item , type, style, idType}) {  
    const color = style === "white" ? "white" : "black";

  return (
    <>
      <div className=' w-[150px] h-[280px] shrink-0 snap-start m-3' >
        <NavLink to={`/${idType}/details/${item.id}`}>
        <img 
        className='w-full h-[80%] rounded-xl' 
        src={item.poster_path || item.profile_path ? `https://image.tmdb.org/t/p/w500${item.poster_path  || item.profile_path}` : "/no-avatar.png"} alt={item.name}/>
        </NavLink>
        <div className='w-full h-[20%] p-1'>
          <NavLink to={`/${idType}/details/${item.id}`}>
          {item.name?.length > 25 ||  item.title?.length > 25 ? <h3 style={{color}} className="text-[0.9rem] font-[800] ">{item.name?.slice(0,25) || item.title?.slice(0,25)}...</h3> : <h3 style={{color}} className='text-[0.9rem] font-[800]'>{item.name || item.title} </h3>}
          </NavLink>
          {type === "tv"  ? <p className='text-xs font-[500]'>{item.release_date || item.first_air_date}</p> : ""}
          {type === "movies"  ? <p className='text-xs font-[500]'>{item.release_date || item.first_air_date}</p> : ""}
          {type === "popular" ? <p style={{color}} className='text-xs font-[500]'>{item.release_date || item.first_air_date}</p>: ""}
          {type === "person" ? <p className='text-xs font-[500]'>{item.known_for[0].name || item.known_for[0].title }</p> : ""}
      </div>
    </div>
    </>
  )
}


export default ApiCard  
