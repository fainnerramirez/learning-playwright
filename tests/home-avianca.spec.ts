import { firefox } from "@playwright/test";
import { test } from "../utils/functions.utils";

test.describe("Busqueda en newSite de avianca", () => {
    test('Abrir Home de Avianca', async ({ page }) => {

        // const browser = await firefox.launch({ headless: true })
        // const context = await browser.newContext();
        // const page = await context.newPage();

        await page.goto("https://www.avianca.com/");
        await page.verifyCookies("#onetrust-accept-btn-handler");
        await page.waitForTimeout(1500);

        await page.selectOriginFlight("Mede");
        await page.selectDestinationFlight("cali");
        await page.waitForTimeout(3000);
        await page.selectButtonAndClick("#searchButton");

        await page.waitForTimeout(10000);
        await page.waitForSelector("#journeysContainerId_0", { timeout: 30000 });
    });
});