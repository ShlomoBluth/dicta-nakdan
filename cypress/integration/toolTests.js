/// <reference types="cypress"/>

//run basic tests on nakdan run

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })

            it('Modern nakdan',()=>{
                expect(5).eq(8)
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
})

