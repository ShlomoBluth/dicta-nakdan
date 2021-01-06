/// <reference types="cypress"/>

//run tests on requests from nakdan run

describe('requestsTests',()=>{

    
    beforeEach(() => {
      cy.visit('https://nakdan.dicta.org.il/')
    })


    it('Message after request with 2 minutes delay of response failed when clicking the ron butten'+
    ' of nakdan page'
    ,()=>{
        cy.nakdanRequest({
          message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
          delaySeconds:60*2
        })
    })

  
   it('Message after request with status code 500 failed when clicking the ron butten of nakdan page'
    ,()=>{
        cy.nakdanRequest({
          status:500,
          message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
        })
    })
    
})