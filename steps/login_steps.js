
const {When, Then} = require('cucumber')
const loginPage = require('../support/pages/login_page')


   When('I enter the username, password, reapet password, city and nickname', {timeout: 20000}, async  function () {
           // Write code here that turns the phrase above into concrete actions
            await this.loginPage.navigateToCreateAccount()
            await this.loginPage.createAccount()
         });
   

    
   Then('I should be able to create account', {timeout: 20000}, async function () {
           // Write code here that turns the phrase above into concrete actions
           await this.loginPage.checkIfCreate()
         });
