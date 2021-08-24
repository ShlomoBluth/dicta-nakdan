/// <reference types="cypress"/>

//run basic tests on nakdan run

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {
    describe('basicTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
    
        
        
        it('Modern nakdan',()=>{
            cy.selectStyle('modern').then(()=>{
                cy.runNakdan('משה קיבל תורה מסיני')
                cy.resultsTests('מֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
            })
        })
    
        it('Rabbinic nakdan',()=>{
            cy.selectStyle('rabbinic').then(()=>{
                cy.runNakdan('משה קיבל תורה מסיני')
                cy.resultsTests('מֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
            })
        })
    
        // it('Poetry nakdan',()=>{
        //     cy.selectStyle('poetry').then(()=>{
        //         cy.runNakdan('משה קיבל תורה מסיני')
        //         cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
        //     })
        // })
    })
})

