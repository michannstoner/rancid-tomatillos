import React from 'react'
import './NavBar.css'

const NavBar = ( {handleChange} ) => {
  return (
    <div className='navBar'>
      <h1>Rancid Tomatillos</h1>
      <input type='text' placeholder='Search for Movie' onChange={event => handleChange(event)}/>
    </div>
  )
}

export default NavBar
