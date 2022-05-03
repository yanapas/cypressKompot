
export class NavigationPage {

  clientPageIsOpen(){
    cy.get('[href="/client"]')
      .click()
    cy.get('[data-qa="page-title"]')
      .should('contain','Clients')
    cy.get('[data-qa="create-client-button"]')
      .should('contain', 'Create Client')
  }
  ordersPageIsOpen(){
    cy.get('[href="/order"]')
      .click()
    cy.get('[data-qa="page-title"]')
      .should('contain', 'Orders')
    cy.get('[type="button"]').contains('Create Order')
      .should("be.visible")
  }
  estimatesPageIsOpen(){
    cy.get('[href="/estimate"]')
      .click()
    cy.get('[data-qa="page-title"]')
      .should('contain', 'Estimates')
    cy.get('[type="button"]').contains('New Estimate')
      .should('be.visible')
  }
  invoicesPageIsOpen(){
    cy.get('[href="/invoice"]')
      .click()
    cy.get('[data-qa="page-title"]')
      .should('contain', 'Invoices')
    cy.get('[type="button"]').contains('Create Invoice').should('be.visible')
  }
  paymentsPageIsOpen(){
    cy.get('[href="/payment"]')
      .click()
    cy.get('[data-qa="page-title"]')
      .should('contain', 'Payments')
    cy.get('[type="button"]').contains('Create Payment').should('be.visible')
  }
  schedulePageIsOpen(){
    cy.get('[href="/schedule/calendar"]')
      .click()
    cy.get('[href="/schedule/calendar"]').should('be.visible')
  }

}

export const navigateTo = new NavigationPage()