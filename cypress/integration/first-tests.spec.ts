describe('Our First Test', () => {
  it(`has title 'Tour of Heroes'`, () => {
    cy.visit('/dashboard')
    cy.get('h1').contains('Tour of Heroes')
  })
})