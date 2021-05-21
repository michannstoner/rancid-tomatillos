import React, { Component } from 'react'
import { getSingleMovie, getSingleVideo } from '../../apiCalls'
import './MovieDetails.css'
import { Link } from 'react-router-dom'
import { filterSingleMovieResult, filterVideoResults } from '../../utilities'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleMovie: {},
      singleVideoKey: '',
      error: '',
    }
  }

  componentDidMount = id => {
    getSingleMovie(this.props.movieId)
      .then(data => {
        const filteredMovieData = filterSingleMovieResult(data)
        this.setState({ singleMovie: filteredMovieData })
      })
      .catch(error => this.setState({ error: 'Something went wrong!' }))
    
    getSingleVideo(this.props.movieId)
      .then(data => {
        const filteredVideoData = filterVideoResults(data)
        this.setState({ singleVideoKey: filteredVideoData})
      })
      .catch(error => this.setState({ error: 'Unable to load video!'}))
  }

  render() {
    const movieDate = new Date(`${this.state.singleMovie.release_date}`)
    const yearReleased = movieDate.getFullYear()
    const backgroundStyle = {
        backgroundImage: 
        `linear-gradient(to right, #1C1D1E, 60%, transparent), 
         url(${this.state.singleMovie.backdrop_path})`
      }

    return (
      <section className="movieDetailsContainer" style={backgroundStyle}>
        <Link to='/'style={{textDecoration: 'none', color: 'white'}}>
          <i class='fas fa-arrow-circle-left fa-3x'></i>
        </Link>
        <h2 className='movieTitle'>{this.state.singleMovie.title}</h2>
        <div className='infoContainer'>
         {this.state.singleMovie.average_rating &&
          <h2>⭐️ {this.state.singleMovie.average_rating.toFixed(1)}</h2>}
          <h2>{yearReleased}</h2>
        </div>
        <div className='overviewContainer'>
          <div className='overview'>
            <p>{this.state.singleMovie.overview}</p>
          </div>
          <iframe 
            src={`https://youtube.com/embed/${this.state.singleVideoKey}`}
            alt='trailer-iframe-video-player'
            title='trailer-video-player'
            height='300'
            width='500'>
          </iframe>
        </div>
      </section>
    )
  }
}

export default MovieDetails
