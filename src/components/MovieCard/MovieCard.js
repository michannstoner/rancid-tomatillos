import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = props => {
  return (
    <article className='movieCard'>
      <Link to={`/movies/${props.id}`}>
        <img src={props.img} alt="movie poster"/>
      </Link>
      <p>{props.title}</p>
    </article>
  )
}

export default MovieCard
