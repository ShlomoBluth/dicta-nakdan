
Cypress.Commands.add('runNakdan',(text)=>{
  cy.get('[placeholder="הזן טקסט כאן"]').type(text)
  cy.get('div[class="run-button"]').within(()=>{
    cy.get('button').click()
  })
})

Cypress.Commands.add('resultsTests',(text)=>{
  let nakdanResults=''
  cy.get('[id*="span-C-word"]').each(($word)=>{
      cy.get($word).each($letter=>{
          nakdanResults=nakdanResults+$letter.text()
      }).then(()=>{
          nakdanResults=nakdanResults+' ' 
      })
  }).then(()=>{
      expect(nakdanResults.substring(0,nakdanResults.length-1))
      .to.eq(text)
  }) 
})

Cypress.Commands.add('nakdanRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept( 'POST', '/'+url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  })
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.runNakdan('משה קיבל תורה')

  if(delaySeconds>0){
    cy.get('[class*="spinner"]').should('exist')
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
  
  if(message.length>0){
    cy.contains(message).should('exist')
  }
})   
  
 