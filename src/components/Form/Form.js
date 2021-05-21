import React, { Component } from 'react'


class Form extends Component {
  constructor() {
    super()
  this.state = {
    searchBarValue: ''
  }
}


filterMoviesBySearch = (event) => {
  this.setState({searchBarValue: event.target.value}, () => {
      this.props.filterMovies(this.state.searchBarValue)
  })
}


clearInput = (event) => {
  event.preventDefault()
  this.setState({searchBarValue: ''}, () => {
      this.props.filterMovies(this.state.searchBarValue)
  })
}

  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='Search for Movie'
        value={this.state.searchBarValue}
        onChange={event => this.filterMoviesBySearch(event)}/>
        <button onClick={event => this.clearInput(event)}>CLEAR</button>
      </form>
    )
  }
}

export default Form
