import React from 'react'
import { Link } from 'react-router-dom'
import './NoMatch.css'


const NoMatch = () => {
  return (
    <div className="noMatchContainer">
      <h1>Sorry, page not found!</h1>
      <Link to='/'>
          <button>GO TO HOMEPAGE</button>
      </Link>
    </div>
  )
}

export default NoMatch
