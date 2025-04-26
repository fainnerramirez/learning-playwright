import { test } from "../utils/functions.utils";

test.describe("Busqueda en newSite de avianca", () => {
    test('Abrir Home de Avianca', async ({ page }) => {
        await page.goto("https://www.avianca.com/");
        await page.verifyCookies("#onetrust-accept-btn-handler");
        //await page.selectOriginFlight("Mede");
        await page.selectDestinationFlight("cali");
        // await page.selectDateInitFlight();
        // await page.selectDateEndFlight();
        await page.waitForTimeout(3000);
        await page.selectButtonAndClick("#searchButton");

        const response = await page.waitForResponse(resp =>
            resp.url().includes('/pricing/api/v1/journeys')
        );

        //algo esta pasando..revisar los parametros enviados en la api de precing de vuelos
        // sospecha que alguno no esta llegando..
        //tomaste una captura de pantalla para ver los paramteros enviados a esa api
        // la api responde bad request con la automatización.

        const json = await response.json();
        console.log("response: ", json);

        // const promises = await Promise.all([
        //     page.waitForResponse(response =>
        //         response.url().includes("/pricing/api/v1/journeys") && response.status() === 200
        //     ),
        // ]);

        // Hacer click en buscar y esperar navegación a /booking/select/
        // const promises = await Promise.all([
        //     page.waitForNavigation({
        //         url: /.*\/booking\/select\/.*/, // esperar navegación hacia booking/select
        //         waitUntil: "networkidle" // espera que no haya más solicitudes pendientes
        //     }),
        //     // page.selectButtonAndClick("#searchButton")
        // ]);

        // console.log("Promises: ", promises);

        await page.waitForTimeout(10000);
        await page.waitForSelector("#journeysContainerId_0", { timeout: 30000 });
        // await page.close();
    });
});