/// <reference types="cypress"/>

//run tests on requests from nakdan run

describe('requestsTests',()=>{

    
    beforeEach(() => {
      cy.visit('https://nakdan.dicta.org.il/')
    })

    


    it('Successful request with 60 seconds delay of response when clicking the run butten of'+
    ' nakdan page '
    ,()=>{
        cy.nakdanRequest({
          delaySeconds:60})
     })

    it('Message after request failed with 61 seconds delay of response when clicking the ron butten'+
    ' of nakdan page'
    ,()=>{
        cy.nakdanRequest({
          message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
          delaySeconds:61
        })
    })

  
   it('Message after request failed with status code 500 when clicking the ron butten of nakdan page'
    ,()=>{
        cy.nakdanRequest({
          status:500,
          message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
        })
    })
    
})