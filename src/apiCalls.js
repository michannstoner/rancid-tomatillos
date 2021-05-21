const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

const getSingleMovie = id => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
}

const getSingleVideo = id => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(response => response.json())
}

export { getAllMovies, getSingleMovie, getSingleVideo }
