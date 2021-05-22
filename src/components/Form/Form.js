import React, { Component } from 'react'
import '../NavBar/NavBar.css'


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
    this.setState({searchBarValue: ''}, () => this.props.clearFilteredMovies())
  }


  render() {
    return (
      <form className='searchBar'>
        <input
          type='text'
          placeholder='Search Movies by Title'
          value={this.state.searchBarValue}
          onChange={event => this.filterMoviesBySearch(event)}/>
        <i className='far fa-times-circle fa-2x' onClick={event => this.clearInput(event)}></i>
      </form>
    )
  }
}

export default Form
