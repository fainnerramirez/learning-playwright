import { test as base, selectors } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    page.isElementPresent = async (selector: string) => {
      const elementHandle = await page.$(selector);
      return elementHandle !== null;
    };

    page.selectOriginFlight = async (origin: string) => {
      const origen = await page.locator("#originDiv");
      await origen.click();
      await origen.getByPlaceholder("Origen").fill(origin);
      await origen.press("Enter");
      await page.waitForTimeout(1000);
      await page.locator(".station-control-list_item_link").first().click();
    };

    page.selectDestinationFlight = async (destination: string) => {
      const destino = await page.getByPlaceholder("Hacia");
      await destino.fill(destination);
      await destino.press("Enter");
      await page.waitForTimeout(1500);
      await page.locator(".station-control-list_item_link").first().click();
    };

    page.verifyCookies = async (selector: string) => {
      const elementCookie = await page.isElementPresent(selector);
      if (elementCookie) {
        await page.waitForTimeout(2000);
        await page.click(selector);
      }
    };

    page.selectButtonAndClick = async (selector: string) => {
      const buttonSearch = await page.locator(selector);
      if (buttonSearch) await buttonSearch.click();
    };

    page.selectDateInitFlight = async (date?: Date) => {
      console.log("Sin Implementación");
      // //fecha de ida y de vuelta
      // const isCheckIdaYVuelta = await page.locator("#journeytypeId_0").isChecked();

      // if (isCheckIdaYVuelta) {

      //     const ida = await page.locator("#departureDateButtonId");
      //     await ida.click();
      //     const dayWrapper = await page.locator(".ngb-dp-day:not(.disabled)");

      //     const datesIda = await dayWrapper.locator(".custom-day_day");
      //     await datesIda.first().click();

      //     const vuelta = await page.locator("#arrivalInputDatePickerId");
      //     await vuelta.click();

      //     const datesVuelta = await dayWrapper.locator(".custom-day_day");
      //     await datesVuelta.first().click();
      // }
      // else {

      //     const ida = await page.locator("#departureDateButtonId");
      //     await ida.click();
      //     const dayWrapper = await page.locator(".ngb-dp-day:not(.disabled)");
      //     const datesIda = await dayWrapper.locator(".custom-day_day");
      //     await datesIda.first().click();
      // }
    };

    page.selectDateEndFlight = async (date?: Date) => {
      console.log("Sin Implementación");
    }

    await use(page);
  }
});

export { expect } from '@playwright/test';