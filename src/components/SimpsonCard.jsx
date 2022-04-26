import React from 'react';
import { Link } from 'react-router-dom';

const SimpsonCard = ({ simpson }) => {

  return (
    <div className="col-4">
      <div className="card border m-4 h-100">

        <h4>{simpson.name}</h4>
        <h6>{simpson.id}</h6>
        <button
          className="btn btn-success"
        >
          <Link to={`/simpson/${simpson.id}`}>CLick On {simpson.name}</Link>
        </button>
      </div>
    </div>
  )
}

export default SimpsonCard