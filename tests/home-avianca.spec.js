import { test, firefox, chromium } from "@playwright/test";

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
        await page.getByRole("button", { name: 'Aceptar' }).click();

        //rellenando los valores de la búsqueda
        const origen = await page.locator("#originDiv");
        await origen.click();
        await origen.getByPlaceholder("Origen").fill("Cali");

        const destino = await page.locator(".control_field-inbound").first();
        await destino.click();
        await destino.getByPlaceholder("Hacia").fill("Bogotá");
    });
})