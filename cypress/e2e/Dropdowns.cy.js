describe('Handling dropdowns',()=>{
    it('using select method',()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
        cy.get('#zcf_users').select('Yes, I currently sell online').should('have.value','Yes, I currently sell online')
    })

    it('Without select method',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field')
        .type('Iran')
        .type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iran')
    })

    it('Auto suggest drop down ',()=>{

        cy.visit('https://www.wikipedia.org/')
        cy.get('[name="search"]').type('Delhi')
        cy.get('.suggestion-link').contains('Delhi').click()
        cy.get('.mw-page-title-main').should('be.visible')
    })

})