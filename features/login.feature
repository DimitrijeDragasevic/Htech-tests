#
# FILE NAME: Login.feature
# DESCRIPTION: Login.feature
# AUTHOR: Dimitrije Dragasevic(DD)
# CREATED: 17-JUN-2019
# NOTES:

Feature: Login feature

   As a qa enginner currently in the interview process
   I want to show my knowlage and test the login page


Scenario: Check for the login page
   When When I am on the the QA sandbox page
   And I click on the log in tab
   Then I should see the log in title, email input, password input and the submit button

Scenario: Log in with random characters instead of a email address
   When I am on the the QA sandbox page
   And I click on the log in tab
   And I enter something that is not an email address
   And I enter a random password
   And I press the submit button
   Then I should be presented with a indication that I have not entered an email address

Scenario: Log in with incorrect email
   When I am on the the QA sandbox page
   And I click on the log in tab
   And I enter a random email address
   And I enter a random password
   And I press the submit button
   Then I should be presented with a screen that indicates that my credentials are incorrect

Scenario: Log in with a incorrect password
   When I am on the the QA sandbox page
   And I click on the log in tab
   And I enter an email address of a test user
   And I enter a random password
   And I press the submit button
   Then I should be presented with a screen that indicates that my credentials are incorrect

Scenario: Log in with the correct credentials
   When I am on the the QA sandbox page
   And I click on the log in tab
   And I enter the email address of a test user
   And I enter the password of a test user
   And I press the submit button
   Then I should be logged in