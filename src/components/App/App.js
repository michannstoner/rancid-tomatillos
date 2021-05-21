import React, {Component} from 'react'
import Movies from '../Movies/Movies.js'
import MovieDetails from '../MovieDetails/MovieDetails'
import NavBar from '../NavBar/NavBar'
import NoMatch from '../NoMatch/NoMatch'
import './App.css'
import { getAllMovies } from '../../apiCalls'
import { Route, Switch, Redirect } from 'react-router-dom'
import { filterMoviesResults, filterSingleMovieResult } from '../../utilities'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: [],
      error: '',
      filteredMovies: [],
      showError: false
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


  filterMovies = value => {
    const filteredMovies = this.state.movieData.filter(movie => {
      return movie.title.toLowerCase().includes(value.toLowerCase())
    })
      this.setState({
        filteredMovies: filteredMovies}, () => this.showErrow(value)
      )
  }


  showErrow = (value) => {
    if (!this.state.filteredMovies.length && value) {
      this.setState({
        showError: true
      })
    }
    if (this.state.filteredMovies.length && value) {
      this.setState({
        showError: false
      })
    }
  }


  clearFilteredMovies = () => {
    this.setState({
      filteredMovies: [],
      showError: false
    })
  }


  render() {
    return (
      <main className="App">
        {!this.state.movieData.length && <h2>Loading</h2>}
        {this.state.error && <h2>{this.state.error}</h2>}
        <Switch>
          <Route
            exact path='/'
            render={() => {
              const whichData = this.state.filteredMovies.length ? this.state.filteredMovies : this.state.movieData
              return (
                <div>
                  <NavBar
                    clearFilteredMovies={this.clearFilteredMovies}
                    filterMovies={this.filterMovies}
                  />
                  {this.state.showError && <h1>No movies match your search criteria!</h1>}
                  {!this.state.showError && <Movies movieData={whichData} />}
                </div>
              )
            }}
          />
          <Route
            exact path='/movies/:movies_id'
            render={({ match }) => {
              const { movies_id } = match.params
              return (
                <MovieDetails movieId={movies_id} clearMovies={this.clearFilteredMovies} />
              )
            }}
          />
          <Route
            render={ () => {
              return (
                <NoMatch clearMovies={this.clearFilteredMovies} />
              )
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App
