import puppeteer from 'puppeteer';
import { Browser, Page } from 'puppeteer';

export const withBrowser = async (
  handler: (browser: Browser, page: Page) => Promise<void>,
) => {
  const browser = await puppeteer.launch({
    //se passar true, nao abre a UI do chromium
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  });
  try {
    const [page] = await browser.pages();

    if (!page) {
      throw new Error('failed to create browser page');
    }

    await handler(browser, page);
  } finally {
    await browser.close();
  }
};
