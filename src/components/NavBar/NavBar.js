import React from 'react'
import './NavBar.css'
import Form from '../Form/Form'

const NavBar = ( {handleChange, clearSearch, filterMovies} ) => {

  return (
    <div className='navBar'>
      <h1>Rancid Tomatillos</h1>
      <Form
        handleChange={handleChange}
        clearSearch={clearSearch}
        filterMovies={filterMovies}
      />
    </div>
  )
}

export default NavBar
//make a Form class component
//NavBar will not just render <Form />
//App no longer will hold onto the searchBarValue
