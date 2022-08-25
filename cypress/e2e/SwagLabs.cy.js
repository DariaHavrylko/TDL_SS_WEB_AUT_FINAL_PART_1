import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {


  context("Log in", () => {
    beforeEach(() => {
      LoginPage.visit();
    });
    
    it("Login with locked_out_user - scenario 1:", () => {
      // - Enter username - “locked_out_user”
      // - Enter password
      // - Validate that user sees error - “Epic sadface: Sorry, this user has been locked out.”
      LoginPage.userField.type("locked_out_user");
      LoginPage.passwordField.type("secret_sauce");
      LoginPage.loginButton.click();
      LoginPage.errorMessege.contains("Epic sadface: Sorry, this user has been locked out.").and('be.visible') ;
    });

    it("Login with wrong password - scenario 2:", () => {
      // - Enter username - standard_user
      // - Enter a wrong password
      // - Validate that user sees error - “Epic sadface: Username and password do not match any user in this service”
      LoginPage.userField.type("standard_user");
      LoginPage.passwordField.type("no_secret_sauce");
      LoginPage.loginButton.click();
      LoginPage.errorMessege.should("have.text","Epic sadface: Username and password do not match any user in this service") ;
    });
  });


  context("Actions on the page", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.userField.type("standard_user");
      LoginPage.passwordField.type("secret_sauce");
      LoginPage.loginButton.click();
    });
    it("Validate item amount - scenario 3:", () => {
      // - Log into page with standard user credentials
      // - Validate that default item amount is 6
      HomePage.itemList.should("have.length", 6);
    });

    it("Sort items - Price high to low - scenario 4:", () => {
      // - Log into page with standard user credentials
      // - Set filter to Price high to low
      // - Validate that first item is “Sauce Labs Fleece Jacket”
      // - Validate that the first item costs “$49.99”
      HomePage.setFilter.select("Price (high to low)");
      HomePage.validateFirstItem1.should("have.text", "Sauce Labs Fleece Jacket");
      HomePage.validatePrice.should("have.text", "$49.99");
    });


    it("Sort items - Price low to High - scenario 5:", () => {
      //  - Log into page with standard user credentials
      //  - Set filter to Price low to high
      //  - Validate that first item is “Sauce Labs Onesie”
      //  - Validate that the first item costs “$7.99”
      HomePage.setFilter.select("Price (low to high)");
      HomePage.validateFirstItem2.should("have.text", "Sauce Labs Onesie");
      HomePage.validatePrice.should("have.text", "$7.99");
    });


    it("Sort items - Name (Z to A) - scenario 6:", () => {
        // - Log into page with standard user credentials
        // - Set filter to Name (Z to A)
        // - Validate that first item is “Test.allTheThings() T-Shirt (Red)”
      HomePage.setFilter.select("Name (Z to A)");
      HomePage.validateFirstItem3.should("have.text", "Test.allTheThings() T-Shirt (Red)");
    });

    it("Validate shopping cart badge amount - scenario 7:", () => {
      // - Log into page with standard user credentials
      // - Open “Sauce Labs Bolt T-Shirt”
      // - Click “Add to cart“
      // - Validate that shoping cart badge is 1 (the red pop-up number)
      // - Click “Back to products”
      // - Open “Sauce Labs Bike Light”
      // - Click “Add to cart”
      // - Validate that shoping cart badge is 2 (the red pop-up number)
    HomePage.openTShirt.click();
    HomePage.addTShirtButton.click();
    HomePage.validateShopingCartBadge.should("have.text", "1");
    HomePage.backToProductsButton.click();
    HomePage.openSauceLabsBikeLight.click();
    HomePage.addSauceLabsBikeLightButton.click();
    HomePage.validateShopingCartBadge.should("have.text", "2");
  });


  it("Reset App State - scenario 8:", () => {
    // - Log into page with standard user credentials
    // - Open “Sauce Labs Bolt T-Shirt”
    // - Click “Add to cart”
    // - Click “Back to products”
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    // - Click “Stack/Burger” icon
    // - Click “Reset App State”
    // - Validate that the badge no longer exists
  HomePage.openTShirt.click();
  HomePage.addTShirtButton.click();
  HomePage.backToProductsButton.click();
  HomePage.validateShopingCartBadge.should("have.text", "1");
  HomePage.stackBurgerButton.click();
  HomePage.resetAppStateButton.click();
  HomePage.validateShopingCartBadge.should('not.exist');
});


it("Validate shopping cart remove button functionality - scenario 9:", () => {
  // - Log into page with standard user credentials
  // - Open “Sauce Labs Bolt T-Shirt”
  // - Click “Add to cart”
  // - Validate that shoping cart badge is 1 (the red pop-up number)
  // - Click “Remove” button
  // - Validate that the badge no longer exists
  HomePage.openTShirt.click();
  HomePage.addTShirtButton.click();
  HomePage.validateShopingCartBadge.should("have.text", "1");
  HomePage.removeTSshirt.click();
  HomePage.validateShopingCartBadge.should('not.exist');
});


it("Buy a T-shirt - scenario 10:", () => {
  // - Log into page with standard user credentials
  // - Open “Test.allTheThings() T-Shirt (Red)”
  // - Click “Add to cart”
  // - Click “Shopping cart”
  // - Click “Checkout”
  // - Fill in First name
  // - Fill in Last name
  // - Fill in ZIP/Postal code
  // - Click Continue
  // - Validate item name “Test.allTheThings() T-Shirt (Red)”
  // - Click “Finnish”
  // - Validate header “THANK YOU FOR YOUR ORDER”
  HomePage.openTestAllTheThingsTShirtRed.click();
  HomePage.addTestAllTheThingsTShirtRedButton.click();
  HomePage.shoppingCartButton.click();
  HomePage.checkoutButton.click();
  HomePage.firstNameField.type("MyFirstName");
  HomePage.lastNameField.type("MyLastName");
  HomePage.ZIPPostalCodeField.type("MyPostalCode");
  HomePage.continueButton.click();
  HomePage.validateName.should("have.text", "Test.allTheThings() T-Shirt (Red)");
  HomePage.finishButton.click();
  HomePage.validateFinish.should("have.text", "THANK YOU FOR YOUR ORDER");
});
    
  });
});
