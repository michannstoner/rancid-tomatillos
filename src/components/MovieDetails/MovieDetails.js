import React from 'react'
import './MovieDetails.css'


const MovieDetails = ( {movieData, id, displayAllMovies} ) => {
  const movieToDisplay = movieData.find(movie => {
    return movie.id === id
  })
  console.log(movieToDisplay)
  return (
    <div className="movieDetailsContainer">
      <img src={movieToDisplay.poster_path} />
      <h1>{movieToDisplay.title}</h1>
      <h2>{movieToDisplay.average_rating.toFixed(1)} ⭐️</h2>
      <button onClick={ () => displayAllMovies()}>GO BACK</button>
    </div>
  )
}

export default MovieDetails
