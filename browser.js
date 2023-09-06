const puppeteer = require('puppeteer')

const startBrowser = async () => {
  let browser
  try {
    browser = await puppeteer.launch({
      headless: false, // hiển thị UI để mình tương tác, để là true là chạy ngầm ở dưới ko hiện UI
      // Chorme sử dụng multiple layers của sandbox để tránh những nội dung web không đáng tin cậy,
      // nếu tin tưởng content đúng thì set như vậy
      args: ['--disable-setuid-sandbox'],
      // truy cập website bỏ qua lỗi liên quan http secure
      'ignoreHTTPSErrors': true
    })
  } catch (error) {
    console.log('Không tạo được browser: ', error)
  }

  return browser
}

module.exports = startBrowser