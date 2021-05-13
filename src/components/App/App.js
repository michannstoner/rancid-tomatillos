import React, {Component} from 'react'
import Movies from '../Movies/Movies.js'
import movieData from '../../movieData'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: movieData.movies,
      displayMovieDetails: false
    }
  }

  displayMovieDetails = () => {
    this.setState({displayMovieDetails: true})
  }

  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        {!this.state.displayMovieDetails &&
          <Movies
            movieData={this.state.movieData}
            displayMovieDetails={this.displayMovieDetails}
          />}
      </main>
    )
  }
}



export default App
