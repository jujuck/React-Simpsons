import React from 'react'

const SimpsonCard = ({ simpson }) => {
  return (
    <div className="col-4">
      <div className="card border m-4 h-100">

        <h4>{simpson.name}</h4>
        <h6>{simpson.id}</h6>
        <p><small>{simpson.normalized_name}</small></p>
      </div>
    </div>
  )
}

export default SimpsonCard