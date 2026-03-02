import React from 'react'
import Api from '../services/Api.jsx'
import { API_KEY } from '../services/key.js';

function Genres({type, change}) {

    const changeGenres = (data) => {
    change(data)
  }
    
  return (
    <>
    <h1 className='text-[2rem] p-3 font-[600] mt-6'>Generos</h1>
    <div className='m-1'>
      {type === "tv" ? <Api changes={changeGenres} dataKey="genres" url={`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=es-ES`} /> : ""}
      {type === "movie" ? <Api changes={change} dataKey="genres" url={`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`}/> : ""}
    </div>
    </>
  )
}

export default Genres

