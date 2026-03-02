import React, { useEffect, useState } from 'react'
import Genres from '../components/Genres';
import Pagination from '../components/Pagination';
import Api from '../services/Api';
import { API_KEY } from '../services/key.js';


function Movies() {

  const [genres, setGenres] = useState('');
  const [pages,setPages] = useState(1);

  const changePage = (data) => {
    setPages(data)
  }

  const changeGenres = (data) => {
    setGenres(data)
  }

  return (
    <>
    <div className='flex flex-wrap lg:w-[80%] lg:m-auto'>
      <div className='w-full h-auto lg:w-[20%]'>
        <Genres type={"movie"} change={changeGenres}/>
      </div>
      <div className='w-full lg:w-[75%]'>
        <h1 className='text-center text-2xl font-[700] pt-10 pb-5 lg:text-start lg:ml-[80px]'>Peliculas populares</h1>
        <div className='flex flex-wrap items-center justify-center  lg:w-[80%] lg:m-auto'>
          <Api idType={"movie"} dataKey={"results"} type={"movies"} url={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genres}&page=${pages}`}/>
        </div>
      </div>
    </div>
    <Pagination onSend={changePage} page={pages}/>
    </>
  )
}

export default Movies