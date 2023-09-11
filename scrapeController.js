const scrape = require("./scraper")
const fs = require('fs')

const scrapeController = async (browserInstance) => {

  const url = 'https://phongtro123.com/'

  const indexs = [1,2,3,4]

  try {
    let browser = await browserInstance
    // gọi hàm ở file scrape
    const categories = await scrape.scrapeCategory(browser, url)
    const selectedCategories = categories.filter((category, index) => indexs.some(i => i === index) )

    let result = await scrape.scraper(browser, selectedCategories[0].link)
    fs.writeFile('chothuephongtro.json', JSON.stringify(result), (error) => {
      if(error) console.log('Ghi data vô file JSON thất bại: ' + error)
      console.log('Thêm data thành công!!!')
    })

  } catch (error) {
    console.log('Lỗi ở scrape controller: ' + error)
  }
}

module.exports = scrapeController