const scrape = require("./scraper")

const scrapeController = async (browserInstance) => {

  const url = 'https://phongtro123.com/'

  try {
    let browser = await browserInstance
    // gọi hàm ở file scrape
    let categories = scrape.scrapeCategory(browser, url)

  } catch (error) {
    console.log('Lỗi ở scrape controller: ' + error)
  }
}

module.exports = scrapeController