import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SimpleSimpson = () => {
  const { id } = useParams();
  const [simpson, setSimpson] = useState({})

  useEffect(() => {
    axios.get(`https://api.sampleapis.com/simpsons/characters/${id}`)
      .then(data => setSimpson(data.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="card border m-4 h-100">
      <h4>Mon Simpson à moi</h4>
      <h6>{simpson.name}</h6>
      <p>{simpson.id} : {simpson.normalized_name}</p>
    </div>
  )
}

export default SimpleSimpson