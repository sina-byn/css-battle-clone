import { promisify } from 'util';
import puppeteer from 'puppeteer';
import getPixels from 'get-pixels';

const readPixels = async (imagePath: string) => {
  const res = await promisify(getPixels)(imagePath, 'image/png');
  return res.data;
};

const meanSquaredError = (a: Uint8Array, b: Uint8Array) => {
  const maxPossibleError = 255 ** 2;
  let error = 0;

  for (let i = 0; i < a.length; i++) {
    error += Math.pow(b[i] - a[i], 2);
  }

  error = error / a.length;
  const errorPercent = (1 - error / maxPossibleError) * 100;

  return parseFloat(errorPercent.toFixed(2));
};

const takeScreenshot = async (id: string, html: string, ...selectors: string[]) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = [process.env.PUBLIC_URL, 'screenshot', id].join('/');

    if (!url) {
      throw Error('invalid url - make sure to set the PUBLIC_URL env properly');
    }

    await page.goto(url);
    await page.$eval('iframe', (e, html) => e.setAttribute('srcdoc', html), html);

    for (const selector of selectors) {
      const element = await page.$(`.${selector}`);
      await element?.screenshot({ path: `public/${selector}.png`, type: 'png' });
    }

    browser.close();
  } catch (err) {
    console.error(err);
  }
};

export { takeScreenshot, meanSquaredError, readPixels };
