const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const SECTIONS = [
  ['01-hero.html',      990],
  ['02-regulation.html',990],
  ['03-brokers.html',  1100],
  ['04-superqual.html', 990],
  ['05-academy.html',  1100],
  ['06-partners.html',  990],
  ['07-expertise.html', 700],
  ['08-cta.html',       880],
];

(async () => {
  const only = process.argv[2];
  const list = only ? SECTIONS.filter(s => s[0].startsWith(only)) : SECTIONS;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const dir = path.join(__dirname, 'sections');
  const out = path.join(__dirname, 'out');
  fs.mkdirSync(out, { recursive: true });

  for (const [file, height] of list) {
    const page = await browser.newPage({
      viewport: { width: 1760, height },
      deviceScaleFactor: 1.5,
    });
    await page.goto('file://' + path.join(dir, file));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(350);
    const name = file.replace('.html', '.png');
    await page.screenshot({ path: path.join(out, name) });
    console.log('rendered', name, '1760x' + height);
    await page.close();
  }
  await browser.close();
})();
