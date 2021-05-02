
Cypress.Commands.add('runNakdan',(text)=>{
  cy.get('[placeholder="הזן טקסט כאן"]').type(text)
  cy.get('div[class="run-button"]').within(()=>{
    cy.get('button').click()
  })
})

Cypress.Commands.add('resultsTests',(text)=>{
  let nakdanResults=''
  cy.get('[class*="main-results-box"]').then($text=>{
    cy.wrap($text.text()).should('eq',text)
  })
  // cy.get('[class*="main-results-box"]').not('[class=token]').within(()=>{
  //   cy.get('span').each($text=>{
  //     nakdanResults=nakdanResults+$text.text()
  //   })
  // }).then(()=>{
  //   expect(nakdanResults)
  //   .to.eq(text)
  // }) 
  // cy.get('[class*="nain-results-box"]').each(($word)=>{
  //     cy.get($word).each($letter=>{
  //         nakdanResults=nakdanResults+$letter.text()
  //     }).then(()=>{
  //         nakdanResults=nakdanResults+' ' 
  //     })
  // }).then(()=>{
  //     expect(nakdanResults.substring(0,nakdanResults.length-1))
  //     .to.eq(text)
  // }) 
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

Cypress.Commands.add('selectStyle',(style)=>{
  if(Cypress.config("viewportWidth")!==1000){
    cy.get('a').contains('סגנון').click({force:true})
    cy.get('input[id="use-'+style+'-nakdan"]').click({force: true})
    cy.get('input[id="use-'+style+'-nakdan"]').should('be.checked')
    cy.get('button').contains('שמור שינויים').click({force: true})
  }else{
    cy.get('input[id="use-'+style+'-nakdan"]').click({force: true})
    cy.get('input[id="use-'+style+'-nakdan"]').should('be.checked')
  }
})
  
 