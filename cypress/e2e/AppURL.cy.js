describe('Testing App URL', () => {
  beforeEach(() => {
    cy.visit('https://digit-fx.vercel.app/')
  })

  it('Verifying App URL', () => {
     cy.scrollTo('bottom')
    cy.contains('Contact Us').should('be.visible')
   
  })
})