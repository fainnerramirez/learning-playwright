import { ElementHandle, Locator, Page } from '@playwright/test';

declare module '@playwright/test' {
    interface Page {
        selectButtonAndClick(selector: string): Promise<void>;
        verifyCookies(selector: string): Promise<void>;
        isElementPresent(selector: string): Promise<boolean>;
        selectOriginFlight(origin: string): Promise<void>;
        selectDestinationFlight(destination: string): Promise<void>;
        selectDateInitFlight(date?: Date): Promise<void>;
        selectDateEndFlight(date?: Date): Promise<void>;
        selectElementDOM(selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null>
    }
}

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