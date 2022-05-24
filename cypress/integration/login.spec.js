import navigationPage from '../support/page_object/navigationPage'
import clientPage from "../support/page_object/clientPage"



describe('Log in', () => {
  it('Log in  with valid credentials', () => {
    cy.login()
  })
})

beforeEach(()=>{
  Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
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
  it('Nav-bar hamburger menu has correct elements and navigates to the right pages', ()=> {
    cy.login()
    navigationPage.hamburgerDropdown()
    cy.dropdownOpen()
    navigationPage.workersPageIsOpen()
    cy.dropdownOpen()
    navigationPage.addressesPageIsOpen()
    cy.dropdownOpen()
    navigationPage.vendorsPageIsOpen()
    cy.dropdownOpen()
    navigationPage.productsPageIsOpen()
    cy.dropdownOpen()
    navigationPage.purchaseOrdersPageIsOpen()
    cy.dropdownOpen()
    navigationPage.absencesPageIsOpen()
  })
  it('Right-side nav-bar links navigate to the right pages', ()=>{
    cy.login()
    navigationPage.informationPageIsOpen()
    navigationPage.settingsPageIsOpen()
  })
})
