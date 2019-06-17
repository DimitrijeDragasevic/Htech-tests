
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class CreateAccPage extends Page {
// Selectors
    // get createAccountButtonONE () {return '[class="enrg-button enrg-button--large enrg-button--wide enrg-button--primary"]'}
    // get mainContainer () {return '[class="enrg-app"]'}
    // get createAccountPageTxt () {return '[class="enrg-header__title"]'}
    // get emailfieldSel () {return '[name="email"]'}
    // get passwordSel () {return '[name="password"]'}
    // get reapetPasswordSel () {return '[name="matchPassword"]'}
    // get countrySel () {return '[name="regionName"]'}
    // get cityfielSel () {return '[name="city"]'}
    // get nicknamefielSel () {return '[name="name"]'}
    // get continueButtSel () {return '[type="submit"]'}
    // get totalTitleSel () {return '[class="enrg-verify__title"]'}

    get mainAppTittleSel(){ return '[class="navbar-brand  noselect"]'}
    get lanPageTitleSel () { return '[class="display-3 mb-4"]'}
    get logInButtonSel () {return '[class="btn btn-lg btn-secondary"]'}
    get emailFieldSel () {return '[type="email"]'}
    get passwordFieldSel () {return '[type="password"]'}
    get logInPageTitleSel () {return '[class="display-4 text-center"]'}
    get logInPageSubTitleSel () {return '[class="lead text-center"]'}
    get submitButtonSel () {return '[type="submit"]'}


// Elements
    // get createAccountButton () {return this.browser.element(this.createAccountButtonONE)}
    // get emailTextField () {return this.browser.element(this.emailfieldSel)}
    // get passwordTextField () {return this.browser.element(this.passwordSel)}
    // get reapetPasswordTextField () {return this.browser.element(this.reapetPasswordSel)}
    // get selectListCountry () {return this.browser.element(this.countrySel)}
    // get cityTextField () {return this.browser.element(this.cityfielSel)}
    // get nicknameTextField () {return this.browser.element(this.nicknamefielSel)}
    // get createAccBtn () {return this.browser.element(this.continueButtSel)}

// Methods
    async checkForClientStart(){
        await super.open()
        await this.browser.waitForVisible(this.mainAppTittleSel, config.waitTime.medium)
        let logInText = await this.browser.isExisting(this.lanPageTitleSel)
        let loginButton = await this.browser.isExisting(this.logInButtonSel)
        if(!logInText || !loginButton){
            throw new Error('On of the ui elements on the landing page did not load')
        }
    }
    // async navigateToCreateAccount () {
    //     await super.open()
    //     await this.browser.waitForVisible(this.mainContainer, config.waitTime.long)
    //     await this.createAccountButton.click()
    // }

    // async createAccount () {
    //     await this.browser.waitForVisible(this.createAccountPageTxt, config.waitTime.medium)
    //     await this.emailTextField.setValue(TestData.getUser('user_1').email)
    //     await this.passwordTextField.setValue(TestData.getUser('user_1').password)
    //     await this.reapetPasswordTextField.setValue(TestData.getUser('user_1').reapetPassword)
    //     // await this.selectListCountry.setValue(TestData.getUser('user_1').country)
    //     // await this.selectListCountry[TestData.getUser('user_1').country].click()
    //     await this.selectListCountry.selectByAttribute('value', TestData.getUser('user_1').country)
    //     await this.cityTextField.setValue(TestData.getUser('user_1').city)
    //     await this.nicknameTextField.setValue(TestData.getUser('user_1').nickname)
    //     await this.createAccBtn.click()
    // }

    // async checkIfCreate () {
    //     await this.browser.waitForVisible(this.totalTitleSel, config.waitTime.medium)
    //     await this.browser.waitForText(this.totalTitleSel, config.waitTime.medium)
    //     let totalTitle = await this.browser.getText(this.totalTitleSel)
    //     // assert.strictEqual(totalTitle[0], 'Total accumulated', `the string ${totalTitle[0]} does not mach "Total accumulated" `)
    // }
}

module.exports = CreateAccPage
