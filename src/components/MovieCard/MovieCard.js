import React from 'react'
import './MovieCard.css'

const MovieCard = props => {
  return (
    <article className='movieCard'>

      <img src={props.img} alt="movie poster"/>
      <button onClick={props.displayMovieDetails}>Click for Details</button>
      <p>{props.title}</p>

    </article>
  )
}

export default MovieCard
