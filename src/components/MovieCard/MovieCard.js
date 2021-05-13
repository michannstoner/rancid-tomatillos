import React from 'react'
import './MovieCard.css'

const MovieCard = props => {
  return (
    <article className='movieCard'>

      <img src={props.img} alt="movie poster"/>
      <p>{props.title}</p>
      <button>Click for Details</button>

    </article>
  )
}

export default MovieCard
