import React, {Component} from 'react'
import Movies from '../Movies/Movies.js'
import MovieDetails from '../MovieDetails/MovieDetails'
import './App.css'
import { getAllMovies } from '../../apiCalls'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => {
        this.setState({ movieData: data.movies })
      })
      .catch(error => this.setState({ error: 'Something went wrong, try again later!' }))
  }

  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route 
          exact path='/' 
          render={() => {
            return (
              <Movies movieData={this.state.movieData} />
            )
          }} 
        />
        <Route 
          path='/movies/:movies_id' 
          render={({ match }) => {
            const { movies_id } = match.params
            return ( 
              <MovieDetails movieId={movies_id} />
            )
          }} 
        />
      </main>
    )
  }
}

export default App
