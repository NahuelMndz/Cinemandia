import React, { useEffect, useState } from 'react'
import ApiList from '../components/ApiList';
import GenresList from '../components/GenresList';
import Details from '../components/Details';
import MainActors from '../components/MainActors';
import Directors from '../components/Directors';
import MovieCredits from '../components/MovieCredits';
import Credits from '../components/Credits';
import CreditsAll from '../components/CreditsAll';
import MovieCardSkeleton from '../components/MovieCardSkeleton';


function Api({url , type, dataKey, changes, style, idType}) {

  
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  setLoading(true);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      setItems(dataKey === "" ? data : data[dataKey]);
    })
    .finally(() => setLoading(false));
}, [url]);

  
  return (
    <>
    {dataKey === "genres" ? <GenresList change={changes} genres={items} type={type}/> : ""}

{(type === "tv" || type === "movies" || type === "popular" || type === "person") && (
  loading ? (
    <MovieCardSkeleton count={10} />
  ) : (
    <ApiList
      styles={style}
      movies={type === "popular" ? items.slice(0, 20) : items}
      type={type}
      idType={idType}
    />
  )
)}

    {type === "details" ? <Details movies={items} idType={idType}/> : ""}
 
    {type === "cast" ? <MainActors movies={items}/> : ""}
    {type === "directors" ? <Directors movies={items}/> : ""}
    {type === "movie_credits" ? <MovieCredits movies={items}/> : ""}
    {type === "credits" ? <Credits movies={items}/> : ""}
    {type === "castAll" ? <CreditsAll movies={items}/> : ""}


    </>
  )
}

export default Api
