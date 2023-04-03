
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///your-path/my-pitch-deck.html', { waitUntil: 'networkidle0' });

  const slides = await page.$$('.slides > section');
  for (let i = 0; i < slides.length; i++) {
    await page.evaluate(slide => slide.scrollIntoView(), slides[i]);
    await page.screenshot({ path: `slide${i + 1}.jpg`, quality: 90, clip: { x: 0, y: 0, width: 1280, height: 720 } });
  }

  await browser.close();
})();
