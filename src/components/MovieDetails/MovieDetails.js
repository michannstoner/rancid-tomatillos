import React from 'react'
import './MovieDetails.css'

const MovieDetails = ( {movieData, id, displayAllMovies} ) => {
  const movieToDisplay = movieData.find(movie => {
    return movie.id === id
  })

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, #1C1D1E, 60%, transparent), url(${movieToDisplay.backdrop_path})`
  }
  return (
    <section className="movieDetailsContainer" style={backgroundStyle}>
      <h2>{movieToDisplay.title}</h2>
      <h2>{movieToDisplay.average_rating.toFixed(1)} ⭐️</h2>
      <button onClick={ () => displayAllMovies()}>GO BACK</button>
    </section>
  )
}

export default MovieDetails
