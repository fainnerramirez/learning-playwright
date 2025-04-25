import { test } from "../utils/functions.utils";

test.describe("Busqueda en newSite de avianca", () => {
    test('Abrir Home de Avianca', async ({ page }) => {
        await page.goto("https://www.avianca.com/");
        //si existe la sessión de aceptación de Cookies
        const elementCookie = await page.isElementPresent("#onetrust-accept-btn-handler");
        console.log("elementCookie => ", elementCookie);

        if (elementCookie) {
            await page.waitForTimeout(2000); // espera 2 segundos
            await page.click("#onetrust-accept-btn-handler");
        }

        // Rellenando los valores de la búsqueda

        //Origen
        await page.selectOrigin("Mede");
        // Destino
        await page.selectDestination("Bogo");

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

        // //buscar button
        const buttonSearch = await page.locator("#searchButton");
        await buttonSearch.click();

        await page.close();
    });
});