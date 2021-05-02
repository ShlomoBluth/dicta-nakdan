/// <reference types="cypress"/>

//run tests on requests from nakdan run

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {
  describe('requestsTests',()=>{

    
    beforeEach(() => {
      if (Cypress._.isArray(size)) {
        Cypress.config({
          viewportWidth: size[0],
          viewportHeight: size[1]
        })
        cy.viewport(size[0], size[1])
      } else {
        Cypress.config({
          viewportWidth: 375,
          viewportHeight: 812
        })
        cy.viewport(size)
      }
      cy.visit('https://nakdan.dicta.org.il/')
    })
  
  
  
    it('Error message for api response with a delay of 2 minutes when clicking the run button'+
    ' of nakdan page',()=>{
      cy.nakdanRequest({
        url:'api',
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
        delaySeconds:60+15
      })
    })
  
  
    it('Error message for api response with status code 500 when clicking the run button of nakdan page'
    ,()=>{
      cy.nakdanRequest({
        url:'api',
        status:500,
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
      })
    })
      
  })
})

