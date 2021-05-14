import React from 'react'
import './MovieDetails.css'

const MovieDetails = ( {movieData, id, displayAllMovies} ) => {
  const movieToDisplay = movieData.find(movie => {
    return movie.id === id
  })
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, #1C1D1E, 60%, transparent), url(${movieToDisplay.backdrop_path})`
  }
  const movieDate = new Date(`${movieToDisplay.release_date}`)
  const yearReleased = movieDate.getFullYear()

  return (
    <section className="movieDetailsContainer" style={backgroundStyle}>
      <h2 className='movieTitle'>{movieToDisplay.title}</h2>
      <div className='infoContainer'>
        <h2>⭐️ {movieToDisplay.average_rating.toFixed(1)}</h2>
        <h2>{yearReleased}</h2>
      </div>
      <button onClick={ () => displayAllMovies()}>GO BACK</button>
    </section>
  )
}

export default MovieDetails
