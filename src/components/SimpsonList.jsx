import React, { useState } from 'react';
import simpsons from '../data/simspons';
import SimpsonCard from './SimpsonCard';

const SimpsonList = () => {
  const [search, setSearch] = useState(0);
  console.log(simpsons)

  return (
    <div>
      <h2>
        SimpsonList
      </h2>
      <form action="submit">
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </form>
      <div className="container">
        <div className="row">
          {/*getFitleredSimpsons()*/}
          {simpsons
            .filter(simpson => simpson.id > parseInt(search))
            .map((simpson, index) => {
              if (index < 10) return <SimpsonCard simpson={simpson} />
              return ""
            })
          }
        </div>
      </div>

    </div>
  )
}

export default SimpsonList;