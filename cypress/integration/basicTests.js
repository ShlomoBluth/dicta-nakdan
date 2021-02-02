/// <reference types="cypress"/>

//run basic tests on nakdan run

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://nakdan.dicta.org.il/')
    })

    afterEach(()=>{
        cy.on('window:confirm', () => true);
    })
    
    it('Modern nakdan',()=>{
        cy.get('input[id="use-modern-nakdan"]').click({force: true})
        cy.runNakdan('משה קיבל תורה מסיני')
        cy.resultsTests('מֹשֶׁה קִ⁠בֵּל תּוֹרָה מִסִּינַי')
    })

    it('Rabbinic nakdan',()=>{
        cy.get('input[id="use-rabbinic-nakdan"]').click({force: true})
        cy.runNakdan('משה קיבל תורה מסיני')
        cy.resultsTests('מֹשֶׁה קִ⁠בֵּל תּוֹרָה מִסִּינַי')
    })

    it('Poetry nakdan',()=>{
        cy.get('input[id="use-poetry-nakdan"]').click({force: true})
        cy.runNakdan('משה קיבל תורה מסיני')
        cy.resultsTests('משֶׁה קִ⁠בֵּל תּוֹרָה מִסִּינַי')
    })
})