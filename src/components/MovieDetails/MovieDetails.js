import React from 'react'
import './MovieDetails.css'


const MovieDetails = ( {movieData, id} ) => {
  const movieToDisplay = movieData.find(movie => {
    return movie.id === id
  })
  console.log(movieToDisplay)
  return (
    <h1>Hello</h1>
  )
}

export default MovieDetails
