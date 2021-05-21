import React from 'react'
import { Link } from 'react-router-dom'


const NoMatch = () => {
  return (
    <div>
      <h1>Sorry, page not found!</h1>
      <Link to='/'>
        <div className='goHomeButton'>
          <button>GO TO HOMEPAGE</button>
        </div>
      </Link>
    </div>
  )
}

export default NoMatch
// onClick={ () => clearFilteredMovies()
