describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest("subscribe-form").find('input').as("sub-input")
        cy.get('@sub-input').type('sergeihilimanuk@gmail.com')
        cy.contains(/Successfully subbed: sergeihilimanuk@gmail.com!/i).should('not.exist')
        cy.getDataTest("sub-but").click()
        cy.contains(/Successfully subbed: sergeihilimanuk@gmail.com!/i).should('exist')
        cy.wait(3000)

        cy.contains(/Successfully subbed: sergeihilimanuk@gmail.com!/i).should('not.exist')
        cy.get('@sub-input').type('sergeihilimanuk@gmail.io')
        cy.contains(/Invalid email: sergeihilimanuk@gmail.io!/i).should('not.exist')
        cy.getDataTest("sub-but").click()
        cy.contains(/Invalid email: sergeihilimanuk@gmail.io!/i).should('exist')

        cy.wait(3000)
        cy.contains(/Invalid email: sergeihilimanuk@gmail.io!/i).should('not.exist')
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest("sub-but").click()
        cy.contains(/fail!/i).should('exist')
    })
})