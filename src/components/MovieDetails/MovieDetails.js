import React, { Component } from 'react'
import { getSingleMovie } from '../../apiCalls'
import './MovieDetails.css'
import { Link } from 'react-router-dom'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleMovie: {},
      error: "",
    };
  }
  componentDidMount = () => {
    getSingleMovie(this.props.movieId)
      .then((data) => {
        this.setState({ singleMovie: data.movie });
      })
      .catch((error) => this.setState({ error: "Something went wrong!" }));
  };

  render() {
    const movieDate = new Date(`${this.state.singleMovie.release_date}`)
    const yearReleased = movieDate.getFullYear()
    const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, #1C1D1E, 60%, transparent), url(${this.state.singleMovie.backdrop_path})`
    }

    return (
      <section className="movieDetailsContainer" style={backgroundStyle}>
        <h2 className='movieTitle'>{this.state.singleMovie.title}</h2>
        <div className='infoContainer'>
         {this.state.singleMovie.average_rating && 
          <h2>⭐️ {this.state.singleMovie.average_rating.toFixed(1)}</h2>}
          <h2>{yearReleased}</h2>
        </div>
        <div className='overviewContainer'>
          <p>{this.state.singleMovie.overview}</p>
        </div>
        <Link to='/'>
          <div className='buttonContainer'>
            <button>GO BACK</button>
          </div>
        </Link>
      </section>
    )  
  }
}

export default MovieDetails
