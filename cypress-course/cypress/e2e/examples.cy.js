describe("Varios exempels", () => {
    beforeEach(() => {
        cy.visit("/examples")
    })

    it('multi-page testing ', () => {

        cy.getDataTest("nav-why-cypress").click();
        cy.location("pathname").should("equal", "/")


        cy.getDataTest("nav-overview").click();
        cy.location("pathname").should("equal", "/overview")


        cy.getDataTest("nav-fundamentals").click();
        cy.location("pathname").should("equal", "/fundamentals")

        cy.getDataTest("nav-forms").click();
        cy.location("pathname").should("equal", "/forms")


        cy.getDataTest("nav-component").click();
        cy.location("pathname").should("equal", "/component")


        cy.getDataTest("nav-best-practices").click();
        cy.location("pathname").should("equal", "/best-practices")


        cy.getDataTest("nav-examples").click();
        cy.location("pathname").should("equal", "/examples")
     })
     it('intercept', () => {
        cy.intercept("POST", "http://localhost:3000/examples", {
                fixture: 'example.json'
        })
         cy.getDataTest("post-button").click();
     })
     it.only("grudges", () => {
        cy.contains(/Add Some/i)

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })
        cy.getDataTest('claer-button').should('not.exist')

        cy.getDataTest('grudge-list-title').should('have.text', 'Add Some Grudges')

        cy.getDataTest("grudge-input").within(() => {
            cy.get('input').type('Very Big Grudge')
        })
        cy.getDataTest("grudge-button").click()

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.getDataTest('grudge-list-title').should('have.text', 'Grudges')

        cy.getDataTest("grudge-input").within(() => {
            cy.get('input').type('Very Big Grudge2')
        })
        cy.getDataTest("grudge-button").click()
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 2)
            cy.get('li').its(0).should('contains.text', 'Very Big Grudge')
        })
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').its(0).within(() =>{
                cy.get('button').click()
            })
        })
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.getDataTest('clear-button').click()

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })
     })
})