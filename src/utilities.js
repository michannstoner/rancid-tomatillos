const filterResults = (obj) => {
  const filteredData = obj.movies.map(movie => {
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
