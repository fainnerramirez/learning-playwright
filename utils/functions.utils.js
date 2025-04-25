import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    page.isElementPresent = async (selector) => {
      const elementHandle = await page.$(selector);
      return elementHandle !== null;
    };

    page.selectOrigin = async (origin = "bogo") => {
      const origen = await page.locator("#originDiv");
      await origen.click();
      await origen.getByPlaceholder("Origen").fill(origin);
      await origen.press("Enter");
      await page.locator(".station-control-list_item_link").first().click();
    };

    page.selectDestination = async (destination = "bogo") => {
      const destino = await page.getByPlaceholder("Hacia");
      await destino.fill(destination);
      await page.locator(".station-control-list_item_link").first().click();
    };

    await use(page);
  }
});

export { expect } from '@playwright/test';