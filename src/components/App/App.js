import React, {Component} from 'react'
import Movies from '../Movies/Movies.js'
import MovieDetails from '../MovieDetails/MovieDetails'
import './App.css'
import { getAllMovies, getSingleMovie } from '../../apiCalls'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: [],
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

  fetchSingleMovie = (id) => {
    getSingleMovie(id)
      .then(data => {
        this.setState({ singleMovie: data })
      })
      .catch(error => this.setState({ error: 'Something went wrong, try again later!' }))
  }

  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.displayMovieDetails && !this.state.error &&
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
