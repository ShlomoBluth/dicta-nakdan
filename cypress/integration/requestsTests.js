/// <reference types="cypress"/>

//run tests on requests from nakdan run

describe('requestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://nakdan.dicta.org.il/')
  })


  it('Error message for response with a delay of 2 minutes when clicking the run button'+
  ' of nakdan page',()=>{
    cy.nakdanRequest({
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds:60+15
    })
  })

  
  it('Error message for response with status code 500 when clicking the run button of nakdan page'
  ,()=>{
    cy.nakdanRequest({
      status:500,
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
    })
  })
    
})