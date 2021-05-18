import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = props => {
  return (
    <article className='movieCard'>
      <img src={props.img} alt="movie poster"/>
      <Link to={`/movies/${props.id}`}>
        <button onClick={ () => props.displayMovieDetails(props.id)}>Click for Details</button>
      </Link>
      <p>{props.title}</p>

    </article>
  )
}

export default MovieCard
