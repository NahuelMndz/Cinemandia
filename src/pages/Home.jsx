import Api from '../services/Api';
import { API_KEY } from '../services/key.js';

  function Home() {

  return (
    <div className='w-auto h-auto' >
      <section className="bg-[url('./Images/bg-simpsons.webp')] h-[600px] bg-cover bg-center bg-[hsla(240,92%,10%,0.63)] bg-blend-multiply mt-[10px] lg:h-[700px]">
        <div className='w-auto h-full p-10 m-auto flex flex-col items-center justify-center' >
          <h1 className='text-white text-5xl p-5 font-[600] sm:text-[5rem]'>Bienvenidos</h1>
          <h2 className='text-white text-center text-lg font-[500] sm:text-[2rem]'>Millones de películas, series y gente por descubrir. Explora ya.</h2>
          {/* PROXIMAMENTE UN BUSCADOR */}
          {/* <div className='w-[100%] m-auto h-15 flex items-center mt-5 bg-white rounded-md '>
            <input className='w-160 h-full p-5 outline-none' placeholder='Buscar pélicula, serie de TV o Persona...' type="text" />
            <button className='bg-gradient-to-r from-[#1ed5a9] to-[#01b4e4] w-35 h-full rounded-md cursor-pointer text-[1.1rem] text-white font-[600]'>Búsqueda</button>
          </div> */}
        </div>
      </section>


      <section className="h-[390px] lg:h-[430px] lg:w-[60%] lg:m-auto">
        <h2 className="ml-5 pt-5 mb-3 text-xl font-[700]">Las mejores peliculas</h2>
        <div className="overflow-x-auto custom-scroll-dark flex lg:h-[350px] ">
          <div className="flex h-full">
            <Api
            idType="movie"
            dataKey="results"
            type="popular"
            url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es-ES&`}/>
          </div>
        </div>
      </section>

      <section className="h-[390px] bg-[url('./Images/background1.webp')] bg-cover bg-center bg-[hsla(240,92%,10%,0.63)] bg-blend-multiply lg:h-[480px]">
      <div className="lg:w-[60%] lg:m-auto lg:h-full ">
      <h2 style={{color : "white"}} className='ml-5 pt-5 mb-3 text-xl font-[600] '>Las mejores Series</h2>
        <div className='overflow-x-auto custom-scroll flex lg:h-[350px]'>
          <div className='flex h-full'>
            <Api 
            idType={"tv"} 
            dataKey={"results"}  
            type={"popular"} 
            style={"white"} 
            url={`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=es-ES&`} />
          </div>
        </div>
      </div>
      </section>

      <section className='h-[390px] lg:h-[430px] lg:w-[60%] lg:m-auto'>
        <h2 className='ml-5 pt-5 mb-3 text-xl font-[700]'>Las personas mas populares</h2>
        <div className='overflow-x-auto custom-scroll-dark flex lg:h-[320px] '>
          <div className='flex h-full'>
          <Api idType={"person"} 
          dataKey={"results"} 
          type={"popular"} 
          url={`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=es-ES&`} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home