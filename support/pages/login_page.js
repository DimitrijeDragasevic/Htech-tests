
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class LoginPage extends Page {
// Selectors
  get mainAppTittleSel () { return '[class="navbar-brand  noselect"]' }
  get lanPageTitleSel () { return '[class="display-3 mb-4"]' }
  get logInButtonSel () { return '[class="btn btn-lg btn-secondary"]' }
  get emailFieldSel () { return '[type="email"]' }
  get passwordFieldSel () { return '[type="password"]' }
  get logInPageTitleSel () { return '[class="display-4 text-center"]' }
  get logInPageSubTitleSel () { return '[class="lead text-center"]' }
  get submitButtonSel () { return '[type="submit"]' }

  // Methods
  async checkForClientStart () {
    await super.open()
    await this.browser.waitForVisible(this.mainAppTittleSel, config.waitTime.medium)
    await this.browser.waitForVisible(this.lanPageTitleSel, config.waitTime.long)
    let loginButton = await this.browser.isExisting(this.logInButtonSel)    
    if (!loginButton) {
      throw new Error('The login button did not load')
    }
  }
}

module.exports = LoginPage
