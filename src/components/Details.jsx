import React, { useState } from 'react'
import Api from '../services/Api'
import { useParams } from 'react-router-dom';
import Biography from './Biography';
import { API_KEY } from '../services/key';

function Details(item) {

  const items = item.movies;
  
  const {idType, id} = useParams();
  
  const statusMap = {
  "Released": "Estrenada",
  "Post Production": "Postproducción",
  "In Production": "En producción",
  "Planned": "Planeada",
  "Rumored": "Rumoreada",
  "Canceled": "Cancelada",
  "Returning Series": "Serie en emisión",
  "Planned": "Planeada",
  "In Production": "En producción",
  "Ended": "Finalizada",
  "Canceled": "Cancelada",
  "Pilot": "Piloto"
}

  const languageMap = {
  en: "Inglés",
  es: "Español",
  fr: "Francés",
  it: "Italiano",
  de: "Alemán",
  pt: "Portugués",
  ja: "Japonés",
  ko: "Coreano",
  zh: "Chino"
}

    const revenue = Number(items?.revenue);
    const budget = Number(items?.budget);

    const revenueText = Number.isNaN(revenue)
  ? "Desconocido"
  : "$"  + revenue.toLocaleString("en-US");

    const budgetText = Number.isNaN(budget)
  ? "Desconocido"
  : "$"  + budget.toLocaleString("en-US");



  return (
    <>
    {idType === "movie" || idType === "tv" ? <div className='w-full h-full mt-1'>
      <section className="h-auto bg-[#182D47]  lg:bg-[url('./Images/bg-details5.jpg')] lg:bg-cover lg:bg-no-repeat lg:bg-center lg:bg-[hsla(240,92%,10%,0.63)] lg:bg-blend-multiply  ">  
        <div className='p-5 flex flex-col items-center lg:flex-row lg:justify-start lg:w-[70%] lg:m-auto'>
          <img className='w-[300px] h-auto rounded-xl mb-2 ms-p sm:w-[400px]'src={items.poster_path ? `https://image.tmdb.org/t/p/w500${items.poster_path}` : "/no-movie.png"} alt={items.name || items.title} />
          <div className='w-[350px] lg:w-full lg:pl-5 sm:w-[500px]'>
            <h1 className='text-white text-[1.9rem] font-[700] mb-2 lg:text-[2.3rem]'>{items.title || items.name}</h1>
            <p className='text-white mb-1'>Estreno: {items.release_date}</p>
            <div className='text-white flex gap-2 mb-1'>
              {items.genres?.map(e => <p className='' key={e.id}>{e.name}</p>)}
            </div>
            <p className='text-white mb-1'>Ver tráiler</p>
            <h2 className='text-white text-[1.1rem] font-[700] mb-1'>Resumen</h2>
            <p className='text-white'>{items.overview}</p>
            <Api dataKey={""} type={"directors"} url={`https://api.themoviedb.org/3/${idType}/${id}/credits?api_key=${API_KEY}&language=es-ES&`}/>
          </div>
        </div>
      </section>
      <section className='flex flex-col-reverse lg:flex-row lg:w-[70%] lg:m-auto'>
        <Api dataKey={""} type={"cast"} url={`https://api.themoviedb.org/3/${idType}/${id}/credits?api_key=${API_KEY}&language=es-ES&`}/>
        <div className='p-5 lg:mt-10'>
          <div className='text-[1.1rem] font-[700]'>
            <h3 className=''>Titulo Original</h3>
            <h4 className='font-[400]'>{items.original_title || items.original_name}</h4>
          </div>
          <div className='text-[1.1rem] font-[700]'>
            <h3 className=''>Estado</h3>
            <h4 className='font-[400]'>{statusMap[items.status]}</h4>
          </div>
          <div className='text-[1.1rem] font-[700]'>
            <h3 className=''>Idioma Original</h3>
            <h4 className='font-[400]'>{languageMap[items.original_language]}</h4>
          </div>
          <div className='text-[1.1rem] font-[700]'>
            <h3 className=''>Presupuesto</h3>
            <h4 className='font-[400]'>{budgetText}</h4>
          </div>
          <div className='text-[1.1rem] font-[700]'>
            <h3 className=''>Ingresos</h3>
            <h4 className='font-[400]'>{revenueText}</h4>
          </div>
        </div>
      </section>
    </div> : ""}
     {idType === "person" ? <div className='flex flex-col-reverse'>
      <section className=''>
        <div className='flex flex-col-reverse lg:flex-row-reverse lg:w-[70%] lg:m-auto lg:items-start lg:mt-15 lg:mb-20'>
        <Api dataKey={""} type={"movie_credits"} url={`https://api.themoviedb.org/3/${idType}/${id}/combined_credits?api_key=${API_KEY}&language=es-ES&`}/>
          <div className='w-[350px] m-auto mb-5  lg:text-start lg:w-[300px] '>
          <h2 className='text-[1.2rem] font-[600] lg:mb-3'>Información personal</h2>
          <div className='lg:mb-3'>
            <h3 className='text-[1.1rem] font-[600]'>Conocido/a por</h3>
            <p className=''>{items.known_for_department}</p>
          </div>
          <div className='lg:mb-3'>
            <h3 className='font-[600] text-[1.1rem]'>Sexo</h3>
            {items.gender === 2 ? <p>Hombre</p> : ""}
            {items.gender === 1 ? <p>Mujer</p> : ""}
          </div>
          <div className='lg:mb-3'> 
            <h3 className='text-[1.1rem] font-[600]'>Cumpleaños</h3>
            {items.birthday === null ? <p>-</p> : <p>{items.birthday}</p>}
          </div>
          <div className='lg:mb-3'>
            <h3 className='text-[1.1rem] font-[600]'>Lugar de nacimiento</h3>
            {items.place_of_birth === null ? <p>-</p> : <p>{items.place_of_birth}</p>}
          </div>
        </div>
        </div>
        <Api dataKey={""} type={"credits"} url={`https://api.themoviedb.org/3/${idType}/${id}/combined_credits?api_key=${API_KEY}&language=es-ES&`}/>
      </section>  
      <section className='w-full h-auto lg:block lg:flex lg:w-[70%] lg:m-auto'>
        <div className='w-[300px] m-auto pt-5 mb-3 lg:w-[40%] lg:pl-10'>
            <img className='w-full rounded-xl' src={items.profile_path ? `https://image.tmdb.org/t/p/w500${items.profile_path}` : "/no-avatar.png"} alt={item.name} />
        </div>
        <div className='w-[350px] m-auto mb-10 lg:w-full lg:h-[400px] lg:pl-10 lg:pr-10'>
          <h1 className='text-center text-[1.4rem] font-[700] lg:text-start lg:text-[2.4rem]'>{items.name}</h1>
          <p className='text-[1.2rem] font-[600] pt-4'>Biografia</p>
          <Biography biography={items.biography} name={items.name}/>
        </div>
      </section>
    </div>: ""}
    </>
  )
}

export default Details