import LoginPage from './page_object/loginPage'
import { navigateTo } from "./page_object/navigationPage"
import clientPage from "./page_object/clientPage";

Cypress.Commands.add('login', (email, password, path)=> {
  LoginPage.open('/user/login')
  LoginPage.logIn()
})

Cypress.Commands.add('goToProfilePage', ()=> {
  cy.get('#logo').click()
})

Cypress.Commands.add('dropdownOpen', ()=> {
  cy.get('#top-menu .ant-dropdown-trigger').trigger('mouseover')
})

Cypress.Commands.add('createClientAllData', (firstName, lastName, phoneNumber, address, city, email, company, zip) => {
  navigateTo.clientPageIsOpen()
  clientPage.createBtn().first().click();
  clientPage.firstNamePlaceholder().type(firstName);
  clientPage.lastNamePlaceholder().type(lastName);
  clientPage.companyPlaceholder().type(company);
  clientPage.phoneNumberPlaceholder().type(phoneNumber);
  clientPage.addressLine1Placeholder().type(address);
  clientPage.emailPlaceholder().type(email);
  clientPage.statePlaceholder().click();
  clientPage.stateDropdown().contains('California').click();
  clientPage.cityPlaceholder().type(city);
  clientPage.zipCodePlaceholder().type(zip);
  clientPage.saveBtn().click();
  clientPage.linkClient().click()
  clientPage.headerClients().should('contain', 'Clients');
});
