Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters "standard_user" and "secret_sauce"
    Then the user should be logged in successfully
