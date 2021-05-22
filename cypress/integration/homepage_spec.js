describe('Homepage', () => {

  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      'movies': [
        {
          'id': 12367,
          'poster_path': "https://image.tmdb.org/t/p/original//dqA2FCzz4OMmXLitKopzf476RVB.jpg",
          'title': 'Another One',
          'average_rating': 96
        },
        {
          'id': 12345,
          'poster_path': "https://image.tmdb.org/t/p/original//tEvGSlRO0dz1pINzjSEELdTHvwk.jpg",
          'title': 'A Movie',
          'average_rating': 100
        }
      ]
    })
      .visit('http://localhost:3000')
  })

    it('should display movie cards on page load', () => {
    cy.get('.movieCard').contains('Another One')
      .get('.movieCard').contains('A Movie')
      .get('.movieCard').should('have.length', 2)
      .get('.movieCard').contains(96)
      .get('.movieCard').contains(100)
      .get('i').should('be.visible')
      .get('img').should('be.visible')
    })

    it('should display a nav bar', () => {
    cy.get('h1').contains('Rancid Tomatillos').should('be.visible')
      .get('form > input').should('be.visible')
      .get('i').should('be.visible')
    })

    it('should show the input value as the user is typing', () => {
    cy.get('form > input').type('mulan')
      .should('have.value', 'mulan')
    })

    it('should only display movies that meet search criteria', () => {
    cy.get('form > input').type('movie')
      .get('.movieCard').should('have.length', 1)
      .get('.movieCard').contains('A Movie')
    })

    it('should display all movies when user clicks search bar clear button', () => {
      cy.get('form > input').type('movie')
        .get('i:first').click()
        .get('.movieCard').should('have.length', 2)
    })
})

describe('Error Handling', () => {
  it('should display an error message when movie data fetch fails', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {} )
      .visit('http://localhost:3000')
      .get('h2').contains('Loading')
      .then( () => {
        return cy.get('h3').contains('Something went wrong, try again later!')
      })
  })
})
