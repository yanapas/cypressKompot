import navigationPage from '../support/page_object/navigationPage'
import clientPage from "../support/page_object/clientPage"



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
    navigationPage.clientPageIsOpen()
    cy.goToProfilePage()
    navigationPage.ordersPageIsOpen()
    cy.goToProfilePage()
    navigationPage.estimatesPageIsOpen()
    cy.goToProfilePage()
    navigationPage.invoicesPageIsOpen()
    cy.goToProfilePage()
    navigationPage.paymentsPageIsOpen()
    cy.goToProfilePage()
    navigationPage.schedulePageIsOpen()
  })
})
describe('Clients', ()=>{
  it.only('Successful client creation', ()=> {
    cy.login()
    clientPage.createClient()

  })
})