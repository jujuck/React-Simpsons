import React from 'react';
import simpsons from '../data/simspons';

const SimpsonList = () => {
  console.log(simpsons)
  return (
    <div>
      <h2>
        SimpsonList
      </h2>
      <div>
        <h4>{simpsons[0].name}</h4>
        <h6>{simpsons[0].id}</h6>
        <p><small>{simpsons[0].normalized_name}</small></p>
      </div>
    </div>
  )
}

export default SimpsonList;