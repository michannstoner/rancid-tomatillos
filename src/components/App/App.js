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
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.state.searchBarValue &&
          <Route
            exact path='/'
              render={() => {
                return (
                  <Movies movieData={this.state.filteredMovies} />
                )
              }}
            />
          }
        }
        {!this.state.searchBarValue &&
        <Route
          exact path='/'
            render={() => {
              return (
                <Movies movieData={this.state.movieData} />
              )
            }}
          />
        }
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
