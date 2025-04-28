import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    page.isElementPresent = async (selector: string) => {
      const elementHandle = await page.$(selector);
      return elementHandle !== null;
    };

    page.selectElementDOM = async (selector: string) => {
      const element = await page.$(selector);
      return element;
    };

    page.selectOriginFlight = async (origin: string) => {
      expect(page.locator("#originBtn")).toBeVisible();
      await page.locator("#originBtn").click();
      const origen = await page.getByPlaceholder("Origen");
      origen.fill(origin);
      await origen.press("Enter");
      await page.waitForTimeout(500);
      await page.locator(".station-control-list_item_link").first().click();
      await page.setPhoto("origin-field");
    };

    page.selectDestinationFlight = async (destination: string) => {
      const destino = await page.getByPlaceholder("Hacia");
      destino.fill(destination);
      await page.waitForTimeout(500);
      destino.press("Enter");
      await page.waitForTimeout(1000);
      await page.locator(".station-control-list_item_link").first().click();
      await page.setPhoto("destino-field");
    };

    page.verifyCookies = async (selector: string) => {
      const elementCookie = await page.isElementPresent(selector);
      if (elementCookie) {
        await page.waitForTimeout(2000);
        await page.click(selector);
        await page.setPhoto("cookies");
      }
    };

    page.selectButtonAndClick = async (selector: string) => {
      const buttonSearch = await page.locator(selector);
      if (buttonSearch) {
        await buttonSearch.click();
        await page.setPhoto("click-boton-" + selector);
      }
    };

    page.selectDateInitFlight = async (date?: Date) => {
      console.log("Sin Implementación");

    };

    page.selectDateEndFlight = async (date?: Date) => {
      console.log("Sin Implementación");
    }

    page.setPhoto = async (photoName: string) => {
      await page.screenshot({ path: `${photoName}.png`, fullPage: true });
    }

    await use(page);
  }
});

export { expect } from '@playwright/test';