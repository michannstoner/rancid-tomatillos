describe('Homepage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display a nav bar', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  })
})