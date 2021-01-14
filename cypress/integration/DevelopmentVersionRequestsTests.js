/// <reference types="cypress"/>

//run tests on requests from development version nakdan run

describe('DevelopmentVersionRequestsTests',()=>{

  beforeEach(() => {
    cy.visit('https://sharing-nakdan-simple.netlify.app/')
  })


  it('Error message for response with a delay of 2 minutes when clicking the run button'+
  ' of development version nakdan page',()=>{
    cy.nakdanRequest({
      url:'api',
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds:60+15
    })
  })

  
  it('Error message for response with status code 500 when clicking the run button of development'+
  ' version nakdan page',()=>{
    cy.nakdanRequest({
      url:'api',
      status:500,
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
    })
  })
})
