/// <reference types="cypress"/>

//run tests on requests from nakdan run

describe('requestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://nakdan.dicta.org.il/')
  })


  it('Error message for genreclassify response with a delay of 2 minutes when clicking the run button'+
  ' of nakdan page',()=>{
    cy.nakdanRequest({
      url:'genreclassify',
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds:60+15
    })
  })

  it('Error message for api response with a delay of 2 minutes when clicking the run button'+
  ' of nakdan page',()=>{
    cy.nakdanRequest({
      url:'api',
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds:60+15
    })
  })

  
  it('Error message for genreclassify response with status code 500 when clicking the run button'+
  ' of nakdan page',()=>{
    cy.nakdanRequest({
      url:'genreclassify',
      status:500,
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
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