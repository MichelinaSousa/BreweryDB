describe('template spec', () => {
  it('Deve criar uma conta', () => {
    cy.visit('https://www.brewerydb.com/developers')
    
    cy.get('.hs_email').type('teste@teste.com')
    cy.get('.hs_firstname').type('123')
    cy.get('.hs_lastname').type('Fabiana')
    cy.get('.hs_company').type('Clube da cerveja')
    cy.get('.hs_comments').type('Para ajudar na divulgação do meu negócio.')
    
    cy.get('.hs-button').click()
  })
})