describe('Test Iolap Website', () => {

    let iolapPage;

    beforeEach(() => {
        cy.fixture("iolap.json")
            .then((pageDetails) => {
                iolapPage = pageDetails
            })
        cy.visit('https://iolap.com/')
    })

    it('Visit Iolap page and go to offerings section', () => {
       
        cy.acceptCookies()
        cy.clickBtn(iolapPage.getStartedBtn)
        cy.url().should('include', iolapPage.offeringsURL)
    })

    it('Check open positions page', () => {
        
        cy.acceptCookies()
        cy.clickBtn(iolapPage.openPositionsBtn)
        cy.url().should('include', iolapPage.openPositionsURL)
    })

    it('List all open positions', () => {

        cy.acceptCookies()
        cy.clickBtn(iolapPage.openPositionsBtn)
        cy.url().should('include', iolapPage.openPositionsURL)
        cy.get(iolapPage.jobCSS).each(($job) => {
                cy.log($job.text())
            })
    })
    it.only('Flaky test', () => {
        const delay = Math.random() * 5500;
        setTimeout(() => {
            cy.get('div.typewriter')
            .should('have.text', 'Data & Analytics')    
        }, delay)
        
    })
    
})