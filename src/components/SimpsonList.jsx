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
      <SimpsonCard />
    </div>
  )
}

export default SimpsonList;