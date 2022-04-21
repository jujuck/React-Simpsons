import React from 'react';

import articles from '../data/article';

const Article = ({ index, displayButton }) => {
  return (
    <div className="card shadow m-5">
      <h3>{articles[index].titre}</h3>
      <p>{articles[index].text}</p>
      <p><small>{articles[index].legend ? articles[index].legend : 'Sans Legende'}</small></p>
      {displayButton ? <button>En Savoir plus</button> : ''}
    </div>
  )
}

export default Article