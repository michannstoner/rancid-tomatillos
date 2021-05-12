import React from 'react'

const MovieCard = props => {
  return (
    <article className='movieCard'>

      <img src={props.img} />
      <p>{props.title}</p>

    </article>
  )
}

export default MovieCard
