
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
    cy.get('[type="button"]').contains('Create Invoice')
      .should('be.visible')
  }
  paymentsPageIsOpen(){
    cy.get('[href="/payment"]')
      .click()
    cy.get('[data-qa="page-title"]')
      .should('contain', 'Payments')
    cy.get('[type="button"]').contains('Create Payment')
      .should('be.visible')
  }
  schedulePageIsOpen(){
    cy.get('[href="/schedule/calendar"]')
      .click()
    cy.get('[href="/schedule/calendar"]')
      .should('be.visible')
  }
  hamburgerDropdown(){
    cy.get('#top-menu .ant-dropdown-trigger').click()
    const hamburger = ['Workers', 'Addresses', 'Vendors', 'Products', 'Purchase Orders', 'Absences'];
      for(let i =0; i < hamburger.length; i++){
        cy.get('.ant-dropdown-menu-title-content').contains(hamburger[i])
      }
  }
  workersPageIsOpen(){
    cy.get('[href="/worker"]')
      .click()
    cy.get('[data-qa="page-title"]')
      .should('be.visible')
    cy.get('[type="button"]').contains('Invite Worker')
      .should('be.visible')
  }
  addressesPageIsOpen(){
    cy.get('[href="/address"]')
      .click()
    cy.get('.h4').contains('Addresses')
      .should('be.visible')
  }
  vendorsPageIsOpen(){
    cy.get('[href="/vendor"]')
      .click()
    cy.get('[data-qa="page-title"]')
      .should('be.visible')
    cy.get('[type="button"]').contains('Add New Vendor')
      .should('be.visible')
  }
  productsPageIsOpen(){
    cy.get('[href="/product"]')
      .click()
    cy.get('[data-qa="page-title"]').contains('Products')
      .should('be.visible')
    cy.get('[type="button"]').contains('New Product')
      .should('be.visible')
  }
  purchaseOrdersPageIsOpen(){
    cy.get('[href="/purchaseOrder"]')
      .click()
    cy.get('.h4').contains('Purchase Order Dashboard')
      .should('be.visible')
    cy.get('[type="button"]').contains('ADD NEW PURCHASE ORDER')
      .should('be.visible')
  }
  absencesPageIsOpen(){
    cy.get('[href="/absence"]')
      .click()
    cy.get('h4').contains('Absences')
      .should('be.visible')
    cy.get('[type="button"]').contains('New Absence')
      .should('be.visible')
  }
  informationPageIsOpen(){
    cy.get('[href="/info"]')
      .click()
    cy.get('[data-qa="page-title"]').contains('Information')
      .should('be.visible')
    cy.get('h1')
      .should('have.text', 'Contact us')
  }
  settingsPageIsOpen(){
    cy.get('[href="/settings/companyAccount"]')
      .click()
    cy.get('h5').contains('Company Information')
      .should('be.visible')
    cy.get('[data-icon="user"]')
      .should('be.visible')

  }
}

export const navigateTo = new NavigationPage()