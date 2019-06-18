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

  async enterTestCaseCreation () {
    await this.browser.click(this.testCaseCard)
    await this.browser.waitForVisible(this.createTestCase, config.waitTime.medium)
  }

  async enterNewTestCase () {
    await this.browser.click(this.createTestCase)
    await this.browser.waitForVisible(this.testCaseTitle, config.waitTime.medium)
  }

  async enterTitle (title) {
    await this.browser.setValue(this.testCaseTitle, title)
  }

  async enterDescription (testCase) {
    await this.browser.setValue(this.description, TestData.getUseCase(testCase).descrption)
  }

  async enterExpectedResult (eResult) {
    await this.browser.setValue(this.expectedResult, eResult)
  }

  async enterStep (index, step) {
    await this.browser.setValue(`[name="testStepId-${index}"]`, step)
  }

  async addStepButton () {
    await this.browser.click(this.addStep)
  }
}

module.exports = TestPage
