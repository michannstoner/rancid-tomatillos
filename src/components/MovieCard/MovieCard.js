import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = props => {
  return (
    <article className='movieCard'>
      <Link to={`/movies/${props.id}`}>
        <img src={props.img} alt="movie poster" onClick={ () => props.clearMovies()}/>
      </Link>
      <div className='titleContainer'>
        <p className='title'>{props.title}</p>
        <div className='ratingContainer'>
          <i class="far fa-star" style={{color: '#fcbf49'}}></i>
          <p className='rating'>{props.rating.toFixed(1)}</p>
        </div>
      </div>
    </article>

  )
}

export default MovieCard
