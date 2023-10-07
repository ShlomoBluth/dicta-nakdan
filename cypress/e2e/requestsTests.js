/// <reference types="cypress"/>

//run tests on requests from nakdan run

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

  sizes.forEach((sizeValue,sizeKey) => {


    describe('requestsTests '+urlKey+' '+sizeKey,()=>{

    
      beforeEach(() => {
        cy.screenSize({size:sizeValue})
        cy.visitpage({url:urlValue})
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
})

