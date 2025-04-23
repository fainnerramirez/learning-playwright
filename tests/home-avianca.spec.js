import { test, firefox, chromium, expect } from "@playwright/test";

test.use({ locale: 'es-ES' });

test.describe("Busqueda en newSite de avianca", () => {
    test('Abrir Home de Avianca', async () => {
        // abriendo el navegador => chrome browser
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://www.avianca.com", {
            waitUntil: "domcontentloaded"
        });

        //si existe la sessión de aceptación de Cookies
        const cookieIsVisible = page.isVisible("#onetrust-accept-btn-handler");
        if (cookieIsVisible) await page.getByRole("button", { name: 'Aceptar' }).click();

        //Rellenando los valores de la búsqueda

        //Origen
        const origen = await page.locator("#originDiv");
        await origen.click();
        await origen.getByPlaceholder("Origen").fill("Cali");
        origen.press("Enter");
        await page.locator(".station-control-list_item_link").first().click();

        //Destino
        const destino = await page.locator(".control_field-inbound").first();
        await destino.getByPlaceholder("Hacia").fill("Arauca");
        destino.press("Enter");
        await page.locator(".station-control-list_item_link").first().click();



    });
})