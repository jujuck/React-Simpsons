import React, { useState } from 'react'

const Footer = () => {
  const [message, setMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault()
    alert(`Votre message ${message} a bien été envoyé`)
  }

  return (
    <div className="container">
      <form action="submit" className="form">
        <h1>Contact</h1>
        <label htmlFor="message">
          <input
            type="text"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <button
          className="btn btn-success"
          onClick={submitForm}
        >
          Valider
        </button>
      </form>
    </div>
  )
}

export default Footer;