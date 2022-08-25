import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get itemList() {
    return cy.get('[class="inventory_item"]');
  }


  static get setFilter() {
    return cy.get(".product_sort_container");
  }

  static get validateFirstItem1() {
    return cy.get("#item_5_title_link");
  }


  static get validatePrice() {
    return cy.get(":nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price");
  }

  static get validateFirstItem2() {
    return cy.get("#item_2_title_link");
  }


  static get validateFirstItem3() {
    return cy.get("#item_3_title_link");
  }


  static get openTShirt() {
    return cy.get("#item_1_title_link");
  }


  static get addTShirtButton() {
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  static get  validateShopingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  static get  backToProductsButton() {
    return cy.get("#back-to-products");
  }

  static get  openSauceLabsBikeLight() {
    return cy.get("#item_0_title_link");
  }

  static get  addSauceLabsBikeLightButton() {
    return cy.get("#add-to-cart-sauce-labs-bike-light");
  }


  static get  stackBurgerButton() {
    return cy.get("#react-burger-menu-btn");
  }

  static get  resetAppStateButton() {
    return cy.get("#reset_sidebar_link");
  }

  static get  removeTSshirt() {
    return cy.get("#remove-sauce-labs-bolt-t-shirt");
  }


  static get openTestAllTheThingsTShirtRed() {
    return cy.get("#item_3_title_link");
  }


  static get addTestAllTheThingsTShirtRedButton() {
    return cy.get("[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']");
  }


  static get shoppingCartButton() {
    return cy.get("#shopping_cart_container");
  }

  static get checkoutButton() {
    return cy.get("#checkout");
  }


  static get firstNameField() {
    return cy.get("#first-name");
  }

  static get lastNameField() {
    return cy.get("#last-name");
  }

  static get ZIPPostalCodeField() {
    return cy.get("#postal-code");
  }


  static get continueButton() {
    return cy.get("#continue");
  }

  static get validateName() {
    return cy.get(".inventory_item_name");
  }


  static get finishButton() {
    return cy.get("#finish");
   }

  static get validateFinish() {
    return cy.get(".complete-header");
   }


}

export default HomePage;
