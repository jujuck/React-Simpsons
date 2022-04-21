import React from 'react'

const SimpsonCard = ({ simpson }) => {

  return (
    <div className="col-4">
      <div className="card border m-4 h-100">

        <h4>{simpson.name}</h4>
        <h6>{simpson.id}</h6>
        <button
          className="btn btn-success"
          onClick={() => alert(`Hello World, I am ${simpson.normalized_name}`)}
        >
          CLick On {simpson.name}
        </button>
      </div>
    </div>
  )
}

export default SimpsonCard