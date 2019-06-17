const { When, Then } = require('cucumber')

When('I am on the the QA sandbox page', async function () {
  await this.loginPage.checkForClientStart()
})

Then('I click on the log in tab', async function () {
  await this.loginPage.clickOnLoginB()
})

Then('I should see the log in title, email input, password input and the submit button', async function () {
  await this.loginPage.checkLoginPage()
})

Then('I enter something that is not an email address', async function () {
  await this.loginPage.enterEmail('user_random')
})

Then('I enter a random password', async function () {
  await this.loginPage.enterPassword('user_random')
})

Then('I press the submit button', async function () {
  await this.loginPage.clickOnSubmit()
})

Then('I should be presented with a indication that I have not entered a valid email address', async function () {
  await this.loginPage.badEmailNot()
})

Then('I enter a random email address', async function () {
  await this.loginPage.enterEmail('user_2')
})

Then('I should be presented with a screen that indicates that my credentials are incorrect', async function () {
  await this.loginPage.notFoundWar()
})
Then('I enter an email address of a test user', async function () {
  await this.loginPage.enterEmail('user_1')
})

Then('I should be presented with a screen that indicates that my password is incorrect', async function () {
  await this.loginPage.badPassCheck()
})
Then('I enter the email address of a test user', async function () {
  await this.loginPage.enterEmail('user_1')
})

Then('I enter the password of a test user', async function () {
  await this.loginPage.enterPassword('user_1')
})

Then('I should be logged in', async function () {
  await this.loginPage.checkLogedInPage()
})

Then('I enter a password that is less then 6 caracters', async function () {
  await this.loginPage.enterPassword('user_less')
})

Then('I should see the warning that the password must be longer then 6 characters', async function () {
  await this.loginPage.sixCaracterWar()
})
