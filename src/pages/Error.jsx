import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])
  return (
    <div className="text-center">
      <h1>Error</h1>
      <Link to='/'>Revenir à la page d'accueil</Link>
    </div>
  )
}

export default Error