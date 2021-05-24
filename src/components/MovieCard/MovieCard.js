import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'


const MovieCard = ({ id, title, img, rating, clearMovies }) => {
  return (
    <article className='movieCard'>
      <Link to={`/movies/${id}`}>
        <img src={img} alt="movie poster" onClick={ () => clearMovies()}/>
      </Link>
      <div className='titleContainer'>
        <p className='title'>{title}</p>
        <div className='ratingContainer'>
          <i class="far fa-star" style={{color: '#fcbf49'}}></i>
          <p className='rating'>{rating.toFixed(1)}</p>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
