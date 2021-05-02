/// <reference types="cypress"/>

//run basic tests on nakdan run

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {
    describe('basicTests',()=>{

        beforeEach(() => {
            if (Cypress._.isArray(size)) {
                Cypress.config({
                    viewportWidth: size[0],
                    viewportHeight: size[1]
                })
                cy.viewport(size[0], size[1])
            } else {
                Cypress.config({
                    viewportWidth: 375,
                    viewportHeight: 812
                })
                cy.viewport(size)
            }
            cy.visit('/')
        })
    
        
        
        it('Modern nakdan',()=>{
            cy.selectStyle('modern')
            cy.runNakdan('משה קיבל תורה מסיני')
            cy.resultsTests('מֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
        })
    
        it('Rabbinic nakdan',()=>{
            cy.selectStyle('rabbinic')
            cy.runNakdan('משה קיבל תורה מסיני')
            cy.resultsTests('מֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
        })
    
        it('Poetry nakdan',()=>{
            cy.selectStyle('poetry')
            cy.runNakdan('משה קיבל תורה מסיני')
            cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
        })
    })
})

