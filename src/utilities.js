const filterMoviesResults = moviesData => {
  const filteredData = moviesData.movies.map(movie => {
    return {
      'id': movie.id,
      'poster_path': movie.poster_path,
      'title': movie.title,
      'average_rating': movie.average_rating
    }
  })
  return filteredData
}

const filterSingleMovieResult = singleMovieData => {
  const { id, title, backdrop_path, release_date, overview, average_rating } = singleMovieData.movie
  const filteredData = {
    'id': id,
    'title': title,
    'backdrop_path': backdrop_path,
    'release_date': release_date,
    'overview': overview,
    'average_rating': average_rating
  }
  return filteredData
}

const filterVideoResults = singleVideoData => {
  const filteredVideoData = singleVideoData.videos[0].key
  return filteredVideoData
}

export { filterMoviesResults, filterSingleMovieResult, filterVideoResults }
