const scrapeCategory = (browser, url) => new Promise(async(resolve, reject) => {
  try {
    // Mở trình duyệt mới
    let page = await browser.newPage()
    console.log('>>> Mở tab mới ...')
    // Truy cập tới URL
    await page.goto(url)
    console.log('>>> Truy cập vào: ' + url)
    // Website đã load xong
    await page.waitForSelector('#webpage')
    console.log('>>> Website đã load xong!!! ')

    const dataCategory = await page.$$eval('#navbar-menu > ul > li', els => {
      dataCategory = els.map(el => {
        return {
          category: el.querySelector('a').innerText,
          link: el.querySelector('a').href
        }
      })
      return dataCategory
    })

    console.log('dataCategory: ', dataCategory)

    await page.close()
    console.log('>>>Tab đã đóng.')
    resolve()

  } catch (error) {
    console.log('Lỗi ở scrape category: ', + error)
    reject(error)
  }
})

module.exports = {
  scrapeCategory
}
