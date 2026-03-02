import React from 'react'
import image from '../Images/iconFooter.svg'
function AboutUs() {
  return (
    <>
    <div className='w-[90%] h-auto m-auto lg:flex'>
      <div className='mt-10 lg:w-[70%]'>
        <h1 className='text-4xl font-[600] pb-3 lg:text-[3rem]' >Sobre Nosotros</h1>
        <p className='text-sm pb-10 lg:text-[1.4rem]'>Esta aplicación web está inspirada en The Movie Database (TMDB) y fue desarrollada con el objetivo de ofrecer una forma simple e intuitiva de explorar películas.
          La página consume datos desde una API externa para mostrar información actualizada, como títulos, géneros, descripciones y otros detalles relevantes de cada película. <br/>
          El proyecto está enfocado en la navegación y visualización de contenido, permitiendo al usuario descubrir nuevas películas de manera rápida y ordenada.
          La interfaz fue pensada para ser clara y accesible, priorizando la experiencia del usuario al momento de buscar o explorar información cinematográfica. <br />
          Esta web forma parte de un proyecto de aprendizaje y práctica en desarrollo web, donde se aplican conceptos como consumo de APIs, renderizado dinámico de datos y organización de componentes.
          <span className='italic'> "Aunque toma inspiración en TMDB, este proyecto es independiente y no está afiliado ni respaldado por The Movie Database."</span></p>
      </div>
      <div className='bg-[#032541] w-50 m-auto mb-10 p-10 rounded-[40px] lg:w-[400px]'>
        <img className='w-full h-full' src={image} alt="xd" />
      </div>
    </div>
    </>
  )
}

export default AboutUs