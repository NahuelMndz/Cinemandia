import React from 'react'

function Directors(items) {

    const crew =  items.movies.crew;
    
    const filteredCrew = crew?.filter(
  person =>
    person.department === "Directing"
);


  return (
    <>
    <div className='flex mt-5 flex-wrap'>
        {filteredCrew?.map(person => (
  <div className='m-3' key={person.credit_id}>
    <p className='text-white font-[600] text-[1rem]'>{person.name}</p>
    <p className='text-white text-[0.9rem]'>{person.known_for_department}</p>
  </div>
))}
    </div>
    </>
  )
}

export default Directors