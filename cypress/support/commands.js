


Cypress.Commands.add('nakdanRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept( 'POST', '/'+url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  })
  cy.get('[placeholder="הזן טקסט כאן"]').type('משה קיבל תורה')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('div[class="run-button"]').within(()=>{
      cy.get('button').click()
  })

  if(delaySeconds>0){
    cy.get('[class*="spinner"]').should('exist')
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
  
  if(message.length>0){
    cy.contains(message).should('exist')
  }
})   
  
 