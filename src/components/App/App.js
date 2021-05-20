import React, {Component} from 'react'
import Movies from '../Movies/Movies.js'
import MovieDetails from '../MovieDetails/MovieDetails'
import NavBar from '../NavBar/NavBar'
import './App.css'
import { getAllMovies } from '../../apiCalls'
import { Route, Switch } from 'react-router-dom'
import { filterMoviesResults, filterSingleMovieResult } from '../../utilities'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: [],
      error: '',
      searchBarValue: '',
      filteredMovies: []
    }
  }


  componentDidMount = () => {
    getAllMovies()
      .then(data => {
        const results = filterMoviesResults(data)
        this.setState({ movieData: results })
      })
      .catch(error => this.setState({ error: 'Something went wrong, try again later!' }))
  }


  handleChange = (event) => {
    this.setState({
      searchBarValue: event.target.value
    })
    this.filterMovies(event.target.value)
  }


filterMovies = value => {
  const filteredMovies = this.state.movieData.filter(movie => {
    return movie.title.toLowerCase().includes(value.toLowerCase())
  })
  this.setState({
    filteredMovies: filteredMovies
  })
}


  render() {
    return (
      <main className="App">
        <NavBar handleChange={this.handleChange}/>
        {!this.state.movieData.length && <h2>Loading</h2>}
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route
          exact path='/'
            render={() => {
              const whichData = this.state.searchBarValue ? this.state.filteredMovies : this.state.movieData
              return (
                <Movies movieData={whichData} />
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
