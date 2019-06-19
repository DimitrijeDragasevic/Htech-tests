const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class TestPage extends Page {
  get testCaseCard () { return '[data-testid="use_cases_card_id"]' }
  get createTestCase () { return '[data-testid="create_use_case_btn"]' }
  get testCaseTitle () { return '[name="title"]' }
  get description () { return '[name="description"]' }
  get expectedResult () { return '[name="expected_result"]' }
  get step () { return '[name="testStepId-0"]' }
  get addStep () { return '[class="btn btn-light mb-3 addTestStep "]' }
  get submitButton () { return '[class="btn btn-primary mt-4 float-right"]' }
  get automatedToggle () { return '[class="pt-1 ml-2"]' }
  get deleteButton () { return '[class="btn btn-secondary ml-2 mb-3 btn-dark btn-lg pull-right"]' }
  get popUpMenuDelete() {return '[class="btn btn-lg btn-danger "]'}
  get testCaseStripe() {return '[class="list-group-item list-group-item-action"]'}

  async enterTestCaseCreation () {
    await this.browser.click(this.testCaseCard)
    await this.browser.waitForVisible(this.createTestCase, config.waitTime.medium)
  }

  async enterNewTestCase () {
    await this.browser.click(this.createTestCase)
    await this.browser.waitForVisible(this.testCaseTitle, config.waitTime.medium)
  }

  async enterTitle (testCase) {
    await this.browser.setValue(this.testCaseTitle, TestData.getUseCase(testCase).title)
  }

  async enterDescription (testCase) {
    await this.browser.setValue(this.description, TestData.getUseCase(testCase).description)
  }

  async enterExpectedResult (testCase) {
    await this.browser.setValue(this.expectedResult, TestData.getUseCase(testCase).expected_result)
  }

  async enterStep (index, step) {
    await this.browser.setValue(`[name="testStepId-${index}"]`, step)
  }

  async addStepButton () {
    await this.browser.click(this.addStep)
  }

  async addTestCaseButton(){
    await this.browser.click(this.submitButton)
  }

  async toogleAutomated(){
    await this.browser.click(this.automatedToggle)
  }

  async deleteTestCases(){
    let numberOfTestCases = await this.browser.elements(this.testCaseStripe)
    for(let i=0;i<numberOfTestCases.value.length;i++){
      await this.browser.waitForVisible(this.testCaseStripe, config.waitTime.medium)
      await this.browser.click(this.testCaseStripe)
      await this.browser.waitForVisible(this.deleteButton)
      await this.browser.click(this.deleteButton)
      await this.browser.waitForVisible(this.popUpMenuDelete)
      await this.browser.click(this.popUpMenuDelete)
    }
    
  }
}

module.exports = TestPage
