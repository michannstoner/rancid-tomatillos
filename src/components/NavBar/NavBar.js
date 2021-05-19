import React from 'react'
import './NavBar.css'

const NavBar = ( {handleChange} ) => {
  return (
    <div className='navBar'>
      <h1>Rancid Tomatillos</h1>
      <form>
        <input
          type='text'
          placeholder='Search for Movie'
          onChange={event => handleChange(event)}/>
        <button>CLEAR</button>
      </form>
    </div>
  )
}

export default NavBar
