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
      <SimpsonCard simpson={simpsons[1]} />
    </div>
  )
}

export default SimpsonList;