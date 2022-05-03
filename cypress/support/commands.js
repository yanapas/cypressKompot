// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email,password,path)=> {
  cy.visit('/')
  cy.get('[data-qa="login"]')
    .click()
  cy.get('[id="email"]')
    .type('test@gmail.com')
  cy.get('[id="password"]')
    .type('Qwerty12')
  cy.get('[type="submit"]').contains('Log in').click()
  cy.get('.col-md-8').should('be.visible', 'Reports')
})
Cypress.Commands.add('goToProfilePage', ()=> {
  cy.get('#logo').click()
})
