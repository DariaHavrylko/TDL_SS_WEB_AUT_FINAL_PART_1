import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get userField() {
    return cy.get("#user-name");
  }

  static get passwordField() {
    return cy.get("#password");
  }

  static get loginButton() {
    return cy.get("#login-button");
  }

  static get errorMessege() {
    return cy.get(".error-message-container");
  }
  
}

export default LoginPage;
