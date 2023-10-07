/// <reference types="cypress"/>

//run tests on requests from development version nakdan run

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

  describe('DevelopmentVersionRequestsTests',()=>{

    beforeEach(() => {
      cy.screenSize({size:size})
      cy.visitpage({url:'/'})
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
  

})

