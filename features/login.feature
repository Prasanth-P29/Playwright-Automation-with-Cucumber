Feature: Login Functionality

    Scenario: Successful login
        Given the user is on the login page
        When the user enters "standard_user" and "secret_sauce"
        Then the user should be logged in successfully