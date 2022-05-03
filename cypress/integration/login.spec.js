import {navigateTo} from "../support/page_object/navigationPage";



describe('Log in', () => {
  it('Log in  with valid credentials', () => {
    cy.login()
  })

  it('Log in  with invalid email', () => {
    cy.visit('/')
    cy.get('[data-qa="login"]')
      .click()
    cy.get('[id="email"]')
      .type('wrong@gmail.com')
    cy.get('[id="password"]')
      .type('Qwerty12')
    cy.get('[type="submit"]').contains('Log in').click()

    cy.get('.ant-notification-notice-message').should('contain', 'Email is not registered')
  })

  it('Log in  with invalid password', () => {
    cy.visit('/')
    cy.get('[data-qa="login"]')
      .click()
    cy.get('[id="email"]')
      .type('test@gmail.com')
    cy.get('[id="password"]')
      .type('Qwerty')
    cy.get('[type="submit"]').contains('Log in').click()

    cy.get('.ant-notification-notice-message').should('contain', 'Incorrect password')
  })
})
describe('Base page nav-bar links are correct ', ()=> {
  it('Nav-bar links are correct', () => {
    cy.login()
    navigateTo.clientPageIsOpen()
    cy.goToProfilePage()
    navigateTo.ordersPageIsOpen()
    cy.goToProfilePage()
    navigateTo.estimatesPageIsOpen()
    cy.goToProfilePage()
    navigateTo.invoicesPageIsOpen()
    cy.goToProfilePage()
    navigateTo.paymentsPageIsOpen()
    cy.goToProfilePage()
    navigateTo.schedulePageIsOpen()
  })
})
describe('Clients', ()=>{
  it.only('Successful client creation', ()=> {
    cy.login()
    cy.get('[href="/client"]')
      .click()
    cy.get('[data-qa="create-client-button"]')
      .click()
    cy.get('[data-qa="page-title"]').should('contain', 'Create New Client')
  })
})