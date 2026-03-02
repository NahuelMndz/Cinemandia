import React from 'react'
import { useParams } from 'react-router-dom';
import Api from '../services/Api';
import { API_KEY } from '../services/key.js';


function CreditsPage() {

  const {idType, id} = useParams();

  return (
    <>
        <Api dataKey={""} type={"castAll"} url={`https://api.themoviedb.org/3/${idType}/${id}/credits?api_key=${API_KEY}&language=es-ES&`}/>
    </>
  )
}

export default CreditsPage