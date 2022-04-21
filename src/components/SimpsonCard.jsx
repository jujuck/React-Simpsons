import React from 'react'

const SimpsonCard = () => {
  const simpson = {
    gender: "",
    id: 1,
    name: "Children",
    normalized_name: "children"
  }
  return (
    <div>
      <h4>{simpson.name}</h4>
      <h6>{simpson.id}</h6>
      <p><small>{simpson.normalized_name}</small></p>
    </div>
  )
}

export default SimpsonCard