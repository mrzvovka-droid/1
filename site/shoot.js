const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const file = 'file://' + path.join(__dirname, 'index.html');
const OUT = path.join(__dirname, '..', '.impeccable', 'review');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });
    await page.goto(file, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 400));
    });
    await page.screenshot({ path: path.join(OUT, name + '.png'), fullPage: true });
    if (name === 'desktop') {
      const route = await page.$('#route');
      await route.evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await page.evaluate(() => new Promise(r => setTimeout(r, 500)));
      await page.screenshot({ path: path.join(OUT, 'desktop-route.png') });
    }
    console.log(name, 'ok');
    await page.close();
  }
  await browser.close();
})();
