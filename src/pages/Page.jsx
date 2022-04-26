import React from 'react';
import { useParams } from 'react-router-dom';

const Page = () => {
  const { text } = useParams();
  return (
    <div className='text-center'>
      <h1>Page</h1>
      <h3>{text}</h3>
    </div>
  )
}

export default Page