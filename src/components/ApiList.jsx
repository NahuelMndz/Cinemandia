import React, { useEffect, useState } from 'react'
import Tvshows from '../pages/Tvshows';
import ApiCard from './ApiCard';

function ApiList({ movies , type, styles, idType}) {
  
  return (
    <>
      {movies.map(item => (
        <ApiCard style={styles} key={item.id} item={item} type={type} idType={idType}/>
      ))}
    </>
  )
}

export default ApiList 



