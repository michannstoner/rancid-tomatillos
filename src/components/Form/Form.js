import React, { Component } from 'react'


class Form extends Component { //handleChange, clearSearch, filterMovies
  constructor() {
    super()
  this.state = {
    searchBarValue: ''
  }
}

filterMoviesBySearch = (event) => {
  console.log(this.state.searchBarValue)
  this.setState({searchBarValue: event.target.value}, () => {
      this.props.filterMovies(this.state.searchBarValue)
  })
}



  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='Search for Movie'
        onChange={event => this.filterMoviesBySearch(event)}/>
        <button onClick={event => this.clearSearch(event)}>CLEAR</button>
      </form>

    )
  }
}

export default Form
