import React from 'react'

function GenresList({genres , type, change}) {
    
  return (
    <>
      <label className='flex items-center justify-start border border-[hsla(0,0%,0%,0.2)] rounded-b-[5px] m-1 min-w-[200px cursor-pointer'>
        <input
        className='m-2'
        type="radio"
        name='genre'
        value={''}
        onChange={(e) => change(e.target.value)} />
        <p className='name-input'>Todas</p>
      </label>
      {genres.map(genre => (
        <label className='flex items-center justify-start border border-[hsla(0,0%,0%,0.2)] rounded-b-[5px] m-1 min-w-[200px] cursor-pointer' key={genre.id}>
          <input
          className='m-2' 
          type="radio" 
          name='genre' 
          value={genre.id}
          onChange={(e) => change(e.target.value)} />
          <p className='name-input'>{genre.name}</p>
        </label>
      ))}
    </>
  )
}

export default GenresList