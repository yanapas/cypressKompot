import LoginPage from './page_object/loginPage'

Cypress.Commands.add('login', (email, password, path)=> {
  LoginPage.open('/user/login')
  LoginPage.logIn()
})

Cypress.Commands.add('goToProfilePage', ()=> {
  cy.get('#logo').click()
})
