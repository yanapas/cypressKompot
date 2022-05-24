

class LoginPage{
  get emailInput() { return cy.get('[id="email"]') }
  get passwordInput() { return cy.get('[id="password"]') }
  get submitBtn() { return cy.get('[type="submit"]').contains('Log in') }
  get baseHeader() { return cy.get('.col-md-8') }

  open(path) {
    return cy.visit(path)
  }

  logIn(email, password){
    this.emailInput.type('test@gmail.com')
    this.passwordInput.type('Qwerty12')
    this.submitBtn.click()
    this.baseHeader.should('be.visible', 'Reports')
  }
}

export default new LoginPage()
