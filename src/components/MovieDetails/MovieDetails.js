import React, { Component } from 'react'
import { getSingleMovie } from '../../apiCalls'
import './MovieDetails.css'


const MovieDetails = ( { singleMovieDetails, displayAllMovies} ) => {
  const movieDate = new Date(`${singleMovieDetails.movie.release_date}`)
  const yearReleased = movieDate.getFullYear()

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, #1C1D1E, 60%, transparent), url(${singleMovieDetails.movie.backdrop_path})`
  }

  return (
    <section className="movieDetailsContainer" style={backgroundStyle}>
      <h2 className='movieTitle'>{singleMovieDetails.movie.title}</h2>
      <div className='infoContainer'>
        <h2>⭐️ {singleMovieDetails.movie.average_rating.toFixed(1)}</h2>
        <h2>{yearReleased}</h2>
        <p>{singleMovieDetails.movie.overview}</p>
      </div>
      <button onClick={ () => displayAllMovies()}>GO BACK</button>
    </section>
  )  
}

export default MovieDetails
