
const { When, Then } = require('cucumber')
//const loginPage = require('../support/pages/login_page')

When('I am on the the QA sandbox page', { timeout: 20000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.loginPage.checkForClientStart()
})

//    Then('I should be able to create account', {timeout: 20000}, async function () {
//            // Write code here that turns the phrase above into concrete actions
//            await this.loginPage.checkIfCreate()
//          });
