import React from 'react'
import './NavBar.css'
import Form from '../Form/Form'

const NavBar = ( {clearFilteredMovies, filterMovies} ) => {

  return (
    <div className='navBar'>
      <h1>Rancid Tomatillos</h1>
      <Form
        clearFilteredMovies={clearFilteredMovies}
        filterMovies={filterMovies}
      />
    </div>
  )
}

export default NavBar
//make a Form class component
//NavBar will not just render <Form />
//App no longer will hold onto the searchBarValue
