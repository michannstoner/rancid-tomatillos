describe('Movie Details', () => {

  beforeEach( () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      'movies': [
        {
          'id': 12367,
          'poster_path': "https://image.tmdb.org/t/p/original//dqA2FCzz4OMmXLitKopzf476RVB.jpg",
          'title': 'Another One',
          'average_rating': 100
        },
        {
          'id': 12345,
          'poster_path': "https://image.tmdb.org/t/p/original//tEvGSlRO0dz1pINzjSEELdTHvwk.jpg",
          'title': 'A Movie',
          'average_rating': 100
        }
      ]
    })
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/12367', {
      'movie':  {
        'id': 12367,
        'title': 'Another One',
        'backdrop_path': 'https://image.tmdb.org/t/p/original//6j2g4fEAmjJqAclzprIpvz9Gaw4.jpg',
        'release_date': '2018-03-01',
        'overview': 'Some overview',
        'average_rating': 100
      }
    })
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/12367/videos', {
      'videos': [
        {
          'key': 'yMvJSivVNrs'
        }
      ]
    })
    .visit('http://localhost:3000')
  })

  it('should display a movie\'s details', () => {
    cy.get('.movieCard:first').click()
      .url().should('include', '12367')
      .get('i').should('be.visible')
      .get('.movieTitle').contains('Another One')
      .get('.movieDetailsContainer').should('be.visible')
      .get('iframe').should('be.visible')
      .get('.infoContainer').contains('⭐️')
  })

  it('should render the homepage when user clicks go back arrow', () => {
    cy.get('.movieCard:first').click()
    .get('i').click()
    .url().should('eq', 'http://localhost:3000/')
  })

  it('should display an error message if movieDetails fails to fetch', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/12367', { statusCode: 404 })
      .get('.movieCard:first').click()
      .get('h1').contains('Sorry, page not found!')
  })

  it('should display an error message if a movie\'s video fails to fetch', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/12367/videos', { statusCode: 404 })
      .get('.movieCard:first').click()
      .get('h1').contains('Sorry, page not found!')
  })
})
