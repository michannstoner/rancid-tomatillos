import React, {Component} from 'react'
import Movies from '../Movies/Movies.js'
import movieData from '../../movieData'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: movieData.movies
    }
  }

  render() {
    return (
      <main className="App">
        <Movies movieData={this.state.movieData}/>
      </main>
    )
  }
}



export default App;
