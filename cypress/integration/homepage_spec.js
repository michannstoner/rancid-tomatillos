describe('Homepage', () => {

  beforeEach(() => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
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
      .visit('http://localhost:3000')
  })

  it('should display movie cards on page load', () => {
    cy.get('.movieCard').contains('Another One')
      .get('.movieCard').contains('A Movie')
      .get('.movieCard').should('have.length', 2)
      .get('img').should('be.visible')
  })

  it('should display a nav bar', () => {
    cy.get('h1').contains('Rancid Tomatillos').should('be.visible')
      .get('form > input').should('be.visible')
      .get('button').contains('CLEAR').should('be.visible')
  })

  it('should show the input value as the user is typing', () => {
    cy.get('form > input').type('mulan')
      .should('have.value', 'mulan')
  })

  it('should only display movies that meet search criteria', () => {
    
  })

})