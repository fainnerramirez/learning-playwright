import { test } from "../utils/functions.utils";

test.describe("Busqueda en newSite de avianca", () => {
    test('Abrir Home de Avianca', async ({ page }) => {
        await page.goto("https://www.avianca.com/");
        await page.verifyCookies("#onetrust-accept-btn-handler");
        await page.selectOriginFlight("Mede");
        await page.selectDestinationFlight("Bogo");
        await page.selectDateInitFlight();
        await page.selectDateEndFlight();
        await page.selectButtonAndClick("#searchButton");
        // await page.close();
    });
});