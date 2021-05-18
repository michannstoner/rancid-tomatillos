const filterResults = moviesData => {
  const filteredData = moviesData.movies.map(movie => {
    return {
      "id": movie.id,
      "poster_path": movie.poster_path,
      "title": movie.title,
      "average_rating": movie.average_rating
    }
  })
  return filteredData
}


export { filterResults }
