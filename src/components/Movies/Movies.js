import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js'


const Movies = ({ movieData }) => {
  const movieCards = movieData.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        img={movie.poster_path}
      />
    )
  })

  return (
    <div>
      {movieCards}
    </div>
  )
}

export default Movies
