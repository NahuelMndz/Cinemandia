import React, { useEffect, useState } from 'react'
import Api from '../services/Api.jsx'
import Genres from '../components/Genres.jsx'
import Pagination from '../components/Pagination.jsx';
import { API_KEY } from '../services/key.js';

function Tvshows() {

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
        <Genres type={"tv"} change={changeGenres}/>
      </div>
      <div className='w-full lg:w-[75%]'>
        <h1 className='text-center text-2xl font-[700] pt-10 pb-5  lg:text-start lg:ml-[80px]'>Series populares</h1>
        <div className='flex flex-wrap items-center justify-center lg:w-[80%] lg:m-auto'>
          <Api idType={"tv"} dataKey={"results"} type={"tv"} url={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=es-ES&with_genres=${genres}&page=${pages}`}/>
        </div>
      </div>
    </div>
    <Pagination onSend={changePage} page={pages}/>
    </>
  )
}

export default Tvshows