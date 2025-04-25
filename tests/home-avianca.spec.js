import { test, chromium } from "@playwright/test";

test.describe("Busqueda en newSite de avianca", () => {
    test('Abrir Home de Avianca', async () => {
        // abriendo el navegador => chrome browser
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://www.avianca.com/", {
            waitUntil: "domcontentloaded",
        });

        //si existe la sessión de aceptación de Cookies
        // const cookieIsVisible = page.isVisible("#onetrust-accept-btn-handler");
        // cookieIsVisible.then(async (response) => {
        //     if(response) await page.locator("#onetrust-accept-btn-handler").click();
        // })

        //Rellenando los valores de la búsqueda

        //Origen
        const origen = await page.locator("#originDiv").click();
        await origen.getByPlaceholder("Origen").fill("Cali");
        origen.press("Enter");
        await page.locator(".station-control-list_item_link").first().click();

        //Destino
        const destino = await page.locator(".control_field-inbound").first().click();
        await destino.getByPlaceholder("Hacia").fill("Arauca");
        await page.locator(".station-control-list_item_link").first().click();

        //fecha de ida y de vuelta
        const isCheckIdaYVuelta = await page.locator("#journeytypeId_0").isChecked();

        if (isCheckIdaYVuelta) {

            const ida = await page.locator("#departureDateButtonId");
            await ida.click();
            const dayWrapper = await page.locator(".ngb-dp-day:not(.disabled)");

            const datesIda = await dayWrapper.locator(".custom-day_day");
            await datesIda.first().click();

            const vuelta = await page.locator("#arrivalInputDatePickerId");
            await vuelta.click();

            const datesVuelta = await dayWrapper.locator(".custom-day_day");
            await datesVuelta.first().click();
        }
        else {

            const ida = await page.locator("#departureDateButtonId");
            await ida.click();
            const dayWrapper = await page.locator(".ngb-dp-day:not(.disabled)");
            const datesIda = await dayWrapper.locator(".custom-day_day");
            await datesIda.first().click();
        }

        //buscar button
        const buttonSearch = await page.locator("#searchButton");
        await buttonSearch.click();
    });
});