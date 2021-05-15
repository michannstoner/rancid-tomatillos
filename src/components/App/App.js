import React, {Component} from 'react'
import Movies from '../Movies/Movies.js'
import MovieDetails from '../MovieDetails/MovieDetails'
// import movieData from '../../movieData'
import './App.css'
import { getAllMovies, getSingleMovie } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: [],
      displayMovieDetails: false,
      error: '',
      singleMovie: {},
    }
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => {
        this.setState({ movieData: data.movies })
      })
      .catch(error => this.setState({ error: 'Something went wrong, try again later!' }))
  }

  toggleMovieDetails = id => {
    this.fetchSingleMovie(id)
  }

  fetchSingleMovie = async (id) => {
    const fetchMovie = await getSingleMovie(id)
      this.setState({ displayMovieDetails: !this.state.displayMovieDetails, singleMovie: fetchMovie })
  }

  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        {!this.state.displayMovieDetails &&
          <Movies
            movieData={this.state.movieData}
            displayMovieDetails={this.toggleMovieDetails}
          />}
        {this.state.displayMovieDetails &&
          <MovieDetails
            singleMovieDetails={this.state.singleMovie}
            displayAllMovies={this.toggleMovieDetails}
          />}

      </main>
    )
  }
}



export default App
