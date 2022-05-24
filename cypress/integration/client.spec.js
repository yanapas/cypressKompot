import {navigateTo, NavigationPage} from "../support/page_object/navigationPage"
import clientPage from "../support/page_object/clientPage"
import { client } from "../fixtures/clientData.json"

describe('Client', ()=>{
  before('Login', ()=> {
    cy.login()
  });

  beforeEach(()=>{
    Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
  })
  describe('Client page', () => {
    it('Client page', () => {
      navigateTo.clientPageIsOpen()
    })

    it('Client create placeholder are correct ', () => {
      clientPage.createBtn().click()
      clientPage.headerCreateNewClient()
      clientPage.placeholderAreCorrect()

    })

    it('Client create placeholder are correct ', () => {
      cy.createClientAllData(client.firstName, client.lastName, client.phoneNumber, client.addressStreet, client.addressCity, client.email, client.companyName, client.zipCode)
    })
  })
})