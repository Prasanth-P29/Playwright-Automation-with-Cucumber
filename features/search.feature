Feature: Product Search Functionality   
    As a user
    I want to search for a product
    So that I can view matching items


    Scenario: Search for an existing product
        Given the user is on the products page
        When the user searches for "Sauce Labs Backpack"
        Then the product "Sauce Labs Backpack" should be displayed in results