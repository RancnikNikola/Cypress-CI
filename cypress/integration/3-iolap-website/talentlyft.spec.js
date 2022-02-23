describe('Test TalentLyft Website', () => {

    let talentlyftPage;

    beforeEach(() => {
        cy.fixture("talentlyft.json")
            .then((pageDetails) => {
                talentlyftPage = pageDetails
            })
            cy.visit('https://iolap.talentlyft.com')
    })

    it('Check for Mid/Senior Python Developer job position', () => {
        
        cy.contains(talentlyftPage.reqCookiesBtn).click()
        cy.get(talentlyftPage.nextPageBtn).click()
        cy.contains(talentlyftPage.pythonDev)
                .should('have.attr', "href")
                .then((href) => {
                    cy.visit(href)
                })
        cy.contains(talentlyftPage.pythonDevTxt)
    })

    it('Check any position with search', () => {  

        cy.contains(talentlyftPage.reqCookiesBtn).click()
        cy.get(talentlyftPage.searchBar).first().type(Cypress.env('randomJob'))
        cy.contains(Cypress.env('randomJob'))
            .should('have.attr', "href")
            .then((href) => {
                cy.visit(href)
            })
        cy.contains(Cypress.env('randomJob'))
    })

    it('Check for ' + Cypress.env('jobTitle') + ' job position (env)', () => {  

        cy.contains(talentlyftPage.reqCookiesBtn).click()
        cy.get(talentlyftPage.searchBar).first().type(Cypress.env('jobTitle'))
        cy.contains(Cypress.env('jobTitle'))
            .should('have.attr', "href")
            .then((href) => {
                cy.visit(href)
            })
        cy.contains(Cypress.env('jobTitle'))
    })
})