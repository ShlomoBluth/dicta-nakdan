/// <reference types="cypress"/>

//run tests on the nakdan page some in hebrew mode and english mode

describe('NakdanPage',()=>{
  
    beforeEach(() => {
      cy.visit('https://citation.dicta.org.il/')
    })

    it('Page is not stuck after Request failed with status code 500 when clicking the ron butten',()=>{
        cy.intercept('POST', '/api', {
            statusCode: 500
        })
        cy.get('textarea[id="textEntryArea"]').type('משה קיבל תורה')
        cy.get('[id="findInstancesBttn"]').click().then(()=>{
            cy.get('.modal-body').within(()=>{
                cy.get('span').invoke('text').should('contain','לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר')
            })
        })
    })
})