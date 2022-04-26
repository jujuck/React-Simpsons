import React from 'react'

const Input = ({ search, handleSetSearch }) => {
  return (
    <input
      type="text"
      id="search"
      value={search}
      onChange={(event) => handleSetSearch(event.target.value)}//onUpdateSearch
    />
  )
}

export default Input