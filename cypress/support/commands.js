


Cypress.Commands.add('nakdanRequest',({status=200,message='',delaySeconds=0})=>{
  cy.intercept( 'POST', '/api', {
    delayMs:1000*delaySeconds,
    statusCode: status
  }).as('api')
  cy.intercept('POST', '/genreclassify', {
    delayMs:1000*delaySeconds,
    statusCode: status
  }).as('genreclassify')
  cy.get('[placeholder="הזן טקסט כאן"]').type('משה קיבל תורה')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('div[class="run-button"]').within(()=>{
      cy.get('button').click()
  })
  
  if(message.length>0){
    cy.contains(message,{timeout:1000*delaySeconds}).should('exist')
  }
})   
  
 