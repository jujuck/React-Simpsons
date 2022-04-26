import React, { useEffect, useState } from 'react';
import SimpsonCard from './SimpsonCard';
import Filter from './Form/Filter';

const SimpsonList = () => {
  const [search, setSearch] = useState(0);
  const [simpsons, setSimpsons] = useState([]);

  // const handleLoad = () => {
  //   console.log("HandleLoad")
  //   fetch("https://api.sampleapis.com/simpsons/characters/")
  //     .then(resultat => resultat.json())
  //     .then(data => setSimpsons(data))
  //     .catch(err => console.error(err))
  // }

  //useEffect(handleLoad, [])
  useEffect(() => {
    console.log("Use Effect and Load data")
    fetch("https://api.sampleapis.com/simpsons/characters/")
      .then(resultat => resultat.json())
      .then(data => setSimpsons(data))
      .catch(err => console.error(err))
  }, [search])

  return (
    <div className='border bg-warning'>
      <h2>
        SimpsonList
      </h2>
      <Filter className="bg-light" search={search} handleSetSearch={setSearch} /*handleLoad={handleLoad}*/ />
      <div className="container bg-danger">
        <div className="row">
          {simpsons
            .filter(simpson => simpson.id > parseInt(search))
            .map((simpson, index) => {
              if (index < 10) return <SimpsonCard simpson={simpson} key={simpson.id} />
              return ""
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SimpsonList;

//https://api.sampleapis.com/simpsons/characters/