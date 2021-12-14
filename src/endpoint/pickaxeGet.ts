import { endpoint } from '../functions/endpoint';
import { withBrowser } from '../functions/withBrowser';

export const PickaxeGet = endpoint(async (req, res) => {
  await withBrowser(async (browser, page) => {
    await page.setUserAgent('');

    await page.goto('https://minecraft.fandom.com/pt/wiki/Picareta');

    const items = await page.evaluate(async () => {
      document
        .querySelector('._3GZth0RBCN1lL5Uj9D2ipN._1mGqz5e1PoTaTD4bCYWXFP')
        ?.remove();

      document.querySelector('div[data-tracking-opt-in-overlay]')?.remove();

      const picAxes = Array.from(document.querySelectorAll('.image img'));

      return picAxes.map((pickAxe: any) => pickAxe.src);
    });

    res.status(200).json(items);
  });
});
