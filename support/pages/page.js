
const TestData = require('../../util/test_data')

class Page {
  constructor (world) {
    this.browser = world.browser
    this.logger = world.logger
    this.page = world.page
  }

  async open () {
    await this.browser.url(`${TestData.getBaseUrl()}`)
  }
}

module.exports = Page
