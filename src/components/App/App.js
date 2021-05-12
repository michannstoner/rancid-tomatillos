import React, {Component} from 'react'
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
    console.log(this.state)
    return (
      <main className="App">
        <Movies movieData={this.state.movieData}/>
      </main>
    )
  }
}



export default App;
