
const TestData = require('../../util/test_data')

class Page {
  constructor (world) {
    this.browser = world.browser
    this.logger = world.logger
    this.page = world.page
  }

  async open (relativeUrl) {
    await this.browser.url(`${TestData.getBaseUrl()}/${relativeUrl}`)
  }
}


module.exports = Page