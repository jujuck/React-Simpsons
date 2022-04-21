import React from 'react';
import simpsons from '../data/simspons';
import SimpsonCard from './SimpsonCard';

const SimpsonList = () => {
  console.log(simpsons)

  return (
    <div>
      <h2>
        SimpsonList
      </h2>
      <div className="container">
        <div className="row">
          {simpsons.map((simpson, index) => {
            if (index < 10) return <SimpsonCard simpson={simpson} />
            return ""
          })}
        </div>
      </div>

    </div>
  )
}

export default SimpsonList;