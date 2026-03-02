import React, { useEffect, useState } from 'react'
import Api from '../services/Api.jsx'
import Pagination from '../components/Pagination.jsx'
import { API_KEY } from '../services/key.js';

function Actors() {
  const [pages,setPages] = useState(1);

  const changePage = (data) => {
    setPages(data)
  }

  

  return (
    <>
    <div className='w-[90%] m-auto'>
      <h1 className='text-center text-2xl font-[700] pt-10 pb-5'>Personas</h1>
      <div className='flex flex-wrap items-center gap-5 justify-center lg:w-[60%] lg:m-auto sm:w-[80%] sm:m-auto'>
        <Api idType={"person"} dataKey={"results"} type={"person"} url={`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=es-ES&page=${pages}`} />
      </div>
    </div>
    <Pagination onSend={changePage} page={pages}/>
    </>
  )
}

export default Actors