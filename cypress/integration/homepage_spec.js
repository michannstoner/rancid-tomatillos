describe('Homepage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display a nav bar', () => {
    cy.get('h1').contains('Rancid Tomatillos')
      .get('form > input')
      .get('button').contains('CLEAR')
  })

  it('should show the input value as the user is typing', () => {
    cy.get('form > input').type('mulan')
      .should('have.value', 'mulan')
  })

  it('should display movie cards on page load', () => {
    
  })
})