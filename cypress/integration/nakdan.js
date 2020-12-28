/// <reference types="cypress"/>

//run tests on the nakdan page some in hebrew mode and english mode

describe('NakdanPage',()=>{
  
    beforeEach(() => {
      cy.visit('https://nakdan.dicta.org.il/')
    })

    it('Page is not stuck after Request failed with status code 500 when clicking the ron butten',()=>{
        cy.intercept('POST', '/api', {
            statusCode: 500
        })
        cy.get('textarea').type(' משה קיבל תורה מסיניי, ומסרה ליהושוע, ויהושוע לזקנים') 
        cy.get('ul[class*="accordion-list"]>li').each(($el)=>{
            cy.get($el).children().click().then(()=>{
                cy.get('[type="button"]').click()
            })
        })
    })
})