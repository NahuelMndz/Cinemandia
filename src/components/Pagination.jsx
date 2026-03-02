import React from 'react'

function Pagination({onSend, page}) {

    const nextPage = () => {
        if(page === 500){
            onSend(page = 500)
        }else{
            onSend(page + 1)
        }
    }
    
    const previousPage = () =>{
        if(page === 1){
            onSend(page = 1)
        }else{
            onSend(page - 1)
        }
    }
     
  return (
    <>
    <div className='flex items-center justify-center h-20 mt-20 mb-10'>
        <button className='bg-blue-500 p-5 w-50 m-5 rounded-[10px] text-[1.2rem] text-white font-[600] cursor-pointer' disabled={1 === page} onClick={previousPage} >Anterior</button>
        <button className='bg-blue-500 p-5 w-50 m-5 rounded-[10px] text-[1.2rem] text-white font-[600] cursor-pointer' disabled={500 === page} onClick={nextPage}>Seguiente</button>
    </div>
    </>
  )
}

export default Pagination