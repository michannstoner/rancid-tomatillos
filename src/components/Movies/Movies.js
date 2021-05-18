import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js'
import './Movies.css'

const Movies = ({ movieData, displayMovieDetails }) => {
  const movieCards = movieData.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        img={movie.poster_path}
      />
    )
  })

  return (
    <div className="cardContainer">
      {movieCards}
    </div>
  )
}

export default Movies
