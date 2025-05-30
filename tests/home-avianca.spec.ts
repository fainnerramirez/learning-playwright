import { firefox } from "@playwright/test";
import { test } from "../utils/functions.utils";

test.describe("Busqueda en newSite de avianca", () => {
    test('Abrir Home de Avianca', async ({ page }) => {

        await page.goto("https://www.avianca.com/");
        await page.verifyCookies("#onetrust-accept-btn-handler");
        await page.waitForTimeout(3000);

        await page.selectOriginFlight("cali");
        await page.selectDestinationFlight("Bogo");
        await page.waitForTimeout(3000);
        await page.selectButtonAndClick("#searchButton");

        await page.waitForTimeout(5000);
        //await page.waitForSelector("#journeysContainerId_0", { timeout: 30000 });
    });
});