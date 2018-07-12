$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoWebsite.feature");
formatter.feature({
  "line": 1,
  "name": "Demo Site Test",
  "description": "",
  "id": "demo-site-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 12842472526,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login to Website",
  "description": "",
  "id": "demo-site-test;login-to-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User clicks on login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters username and password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User must be logged in and display username on the web site",
  "keyword": "Then "
});
formatter.match({
  "location": "logInStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 971161341,
  "status": "passed"
});
formatter.match({
  "location": "logInStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1662113852,
  "status": "passed"
});
formatter.match({
  "location": "logInStepDefinition.user_must_be_logged_in_and_display_username_on_the_web_site()"
});
formatter.result({
  "duration": 43446576,
  "status": "passed"
});
formatter.after({
  "duration": 2274680370,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11140585409,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add to cart",
  "description": "",
  "id": "demo-site-test;add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User clicks Electronics",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Selects Smartphone",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Selects Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Item should be added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_Electronics()"
});
formatter.result({
  "duration": 1050720953,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.selects_Smartphone()"
});
formatter.result({
  "duration": 963319213,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.selects_Add_to_Cart_button()"
});
formatter.result({
  "duration": 65660530,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.item_should_be_added_to_cart()"
});
formatter.result({
  "duration": 89825203,
  "status": "passed"
});
formatter.after({
  "duration": 2287425746,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 10845672523,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Go to Cart",
  "description": "",
  "id": "demo-site-test;go-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User clicks Shopping Cart",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User will be redirected to Shopping Cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "goToCartStepDefinition.user_clicks_Shopping_Cart()"
});
formatter.result({
  "duration": 1039009247,
  "status": "passed"
});
formatter.match({
  "location": "goToCartStepDefinition.user_will_be_redirected_to_Shopping_Cart_page()"
});
formatter.result({
  "duration": 8585664,
  "status": "passed"
});
formatter.after({
  "duration": 2244548058,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 10814807483,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Checkout and Confirm Order",
  "description": "",
  "id": "demo-site-test;checkout-and-confirm-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Logged in User add an item to cart",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User complete the Checkout Information page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#\tAnd complete the Billing Shipping address section"
    },
    {
      "line": 25,
      "value": "#\tAnd complete Shipping method"
    },
    {
      "line": 26,
      "value": "#\tAnd complete the payment method"
    },
    {
      "line": 27,
      "value": "#\tAnd complete the payment information section"
    },
    {
      "line": 28,
      "value": "#\tAnd Click Confirm button"
    }
  ],
  "line": 29,
  "name": "will see a message on the screen that the order is completed",
  "keyword": "Then "
});
formatter.match({
  "location": "checkoutStepDefinition.logged_in_User_add_an_item_to_cart()"
});
formatter.result({
  "duration": 4687790631,
  "status": "passed"
});
formatter.match({
  "location": "checkoutStepDefinition.user_complete_the_Checkout_Information_page()"
});
formatter.result({
  "duration": 14568758697,
  "status": "passed"
});
formatter.match({
  "location": "checkoutStepDefinition.will_see_a_message_on_the_screen_that_the_order_is_completed()"
});
formatter.result({
  "duration": 34680006,
  "status": "passed"
});
formatter.after({
  "duration": 2279457895,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11327308805,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Successful Logout",
  "description": "",
  "id": "demo-site-test;successful-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User clicks on the logout link",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User will be logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "logoutStepDefinition.user_clicks_on_the_logout_link()"
});
formatter.result({
  "duration": 3770363645,
  "status": "passed"
});
formatter.match({
  "location": "logoutStepDefinition.user_will_be_logged_out()"
});
formatter.result({
  "duration": 37565976,
  "status": "passed"
});
formatter.after({
  "duration": 2298900794,
  "status": "passed"
});
});