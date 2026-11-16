import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const sizes = [1440, 1366, 1024, 768, 390, 360];
const base = 'http://127.0.0.1:4173';
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const issues = [];
await fs.mkdir('artifacts', { recursive: true });

for (const width of sizes) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    reducedMotion: 'reduce',
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    await page.goto(base, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await page.locator('#premium-name').waitFor({ state: 'visible', timeout: 15_000 });
    if (!await page.locator('#premium-name').isVisible()) issues.push(`${width}: hero not visible`);
    const count = await page.locator('#projects article').count();
    if (count !== 6) issues.push(`${width}: expected six projects, got ${count}`);
    const stages = page.locator('#highlights button[aria-pressed]');
    if (await stages.count() !== 5) issues.push(`${width}: workflow stages missing`);
    else {
      await stages.nth(2).click();
      const state = await stages.nth(2).getAttribute('aria-pressed');
      if (state !== 'true') issues.push(`${width}: workflow selection did not update`);
    }
    for (let i = 0; i < 6; i++) {
      const img = page.locator('#projects img').nth(i);
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(el => el instanceof HTMLImageElement ? el.decode() : Promise.reject(new Error('Not an image')));
    }
    const box = await page.evaluate(() => ({
      viewport: window.innerWidth,
      doc: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
    }));
    if (box.doc > box.viewport + 2 || box.body > box.viewport + 2) {
      issues.push(`${width}: horizontal overflow doc=${box.doc} body=${box.body} viewport=${box.viewport}`);
    }
    if (width === 1440 || width === 390) {
      await page.screenshot({ path: `artifacts/portfolio-${width}.png`, fullPage: true, animations: 'disabled' });
    }
    console.log(`OK viewport=${width}px; project_cards=${count}; horizontal_content_width=${box.doc}px`);
  } catch (error) {
    issues.push(`${width}: ${String(error)}`);
  }
  if (errors.length) issues.push(`${width}: browser script errors: ${errors.join('; ')}`);
  await context.close();
}
await browser.close();
if (issues.length) {
  console.error('Responsive smoke tests FAILED:');
  for (const issue of issues) console.error(' -', issue);
  process.exit(1);
}
console.log('PASS: six viewport widths, six project images, workflow interaction, reduced-motion mode and horizontal overflow checks');
