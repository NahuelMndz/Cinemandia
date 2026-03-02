import React from 'react'
import Api from '../services/Api'
import { useParams } from "react-router-dom";
import { API_KEY } from '../services/key.js';


function DetailPage() {
  const {idType, id} = useParams();  
  return (
    <>
    <Api dataKey={""} type="details" idType={idType} url={`https://api.themoviedb.org/3/${idType}/${id}?api_key=${API_KEY}&language=es-ES&`}/>
    </>
  )
}

export default DetailPage