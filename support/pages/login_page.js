
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class LoginPage extends Page {
  get mainAppTittleSel () { return '[class="navbar-brand  noselect"]' }
  get lanPageTitleSel () { return '[class="display-3 mb-4"]' }
  get logInButtonSel () { return '[class="btn btn-lg btn-secondary"]' }
  get emailFieldSel () { return '[type="email"]' }
  get passwordFieldSel () { return '[type="password"]' }
  get logInPageTitleSel () { return '[class="display-4 text-center"]' }
  get logInPageSubTitleSel () { return '[class="lead text-center"]' }
  get submitButtonSel () { return '[type="submit"]' }
  get error () { return '[class="invalid-feedback"]' }
  get userCard () { return '[class="card border-card shadow-lg p-3 "]' }
  get loggedInCards () { return '[class="dashboard"]' }
  get logoutButton () { return '[class="nav-link mr-3"]' }

  async checkForClientStart () {
    await super.open()
    await this.browser.waitForVisible(this.mainAppTittleSel, config.waitTime.medium)
    await this.browser.waitForVisible(this.lanPageTitleSel, config.waitTime.long)
    let loginButton = await this.browser.isExisting(this.logInButtonSel)
    if (!loginButton) {
      throw new Error('The login button did not load')
    }
  }
  async click (element) {
    await this.browser.click(element)
  }

  async clickOnLoginB () {
    await this.click(this.logInButtonSel)
  }

  async checkLoginPage () {
    await this.browser.waitForVisible(this.emailFieldSel, config.waitTime.long)
    let password = await this.browser.isExisting(this.passwordFieldSel)
    if (!password) {
      throw new Error('the password filed did not load')
    }
  }
  async enterEmail (user) {
    await this.browser.setValue(this.emailFieldSel, TestData.getUser(user).email)
  }
  async enterPassword (user) {
    await this.browser.setValue(this.passwordFieldSel, TestData.getUser(user).password)
  }

  async clickOnSubmit () {
    await this.click(this.submitButtonSel)
  }
  /*
   since I cannot catch the selector of the '@' popup.
    I can only validate it by not loging in
*/
  async badEmailNot () {
    let userCard = await this.browser.isExisting(this.userCard)
    if (userCard) {
      throw new Error('you have logged in without and EMAIL!!!!!!!')
    }
  }

  async notFoundWar () {
    await this.browser.waitForVisible(this.error, config.waitTime.medium)
    let text = await this.browser.getText(this.error)
    assert.strictEqual(text, 'User not found', 'The error message text does not match the provided one')
  }

  async badPassCheck () {
    await this.browser.waitForVisible(this.error, config.waitTime.medium)
    let text = await this.browser.getText(this.error)
    assert.strictEqual(text, 'Password incorrect', 'The error message text does not match the provided one')
  }

  async checkLogedInPage () {
    await this.browser.waitForVisible(this.loggedInCards, config.waitTime.medium)
    let logoutButton = await this.browser.isExisting(this.logoutButton)
    if (!logoutButton) {
      throw new Error('The logout button is not Existing')
    }
  }

  async sixCaracterWar () {
    await this.browser.waitForVisible(this.error, config.waitTime.medium)
    let text = await this.browser.getText(this.error)
    assert.strictEqual(text, 'Password must be at least 6 characters long', 'the warring is not the one provided')
  }
}

module.exports = LoginPage
