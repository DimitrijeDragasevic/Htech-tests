const { When, Then, And } = require('cucumber')

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
