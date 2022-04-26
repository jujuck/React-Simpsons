import React from 'react';
import Input from './Input';

const Filter = ({ search, handleSetSearch, handleLoad }) => {
  return (
    <form action="submit">
      <label htmlFor="search">
        <Input search={search} handleSetSearch={handleSetSearch} />
        {/*<button onClick={handleLoad} type="button" className='btn btn-success'>Charge</button>*/}
      </label>
    </form>
  )
}

export default Filter