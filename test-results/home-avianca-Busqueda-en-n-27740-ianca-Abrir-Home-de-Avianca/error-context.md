# Test info

- Name: Busqueda en newSite de avianca >> Abrir Home de Avianca
- Location: C:\Users\framir02\projects\avianca\playwright\tests\home-avianca.spec.js:4:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#originDiv')
    - locator resolved to <div id="originDiv" _ngcontent-dsw-c8="" class="control_field_inner">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    3 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 500ms
    7 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="onetrust-pc-dark-filter ot-fade-in"></div> from <div id="onetrust-consent-sdk">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms

    at C:\Users\framir02\projects\avianca\playwright\tests\home-avianca.spec.js:23:57
```

# Test source

```ts
   1 | import { test, chromium } from "@playwright/test";
   2 |
   3 | test.describe("Busqueda en newSite de avianca", () => {
   4 |     test('Abrir Home de Avianca', async () => {
   5 |         // abriendo el navegador => chrome browser
   6 |         const browser = await chromium.launch({ headless: false });
   7 |         const context = await browser.newContext();
   8 |         const page = await context.newPage();
   9 |
  10 |         await page.goto("https://www.avianca.com/", {
  11 |             waitUntil: "domcontentloaded",
  12 |         });
  13 |
  14 |         //si existe la sessión de aceptación de Cookies
  15 |         // const cookieIsVisible = page.isVisible("#onetrust-accept-btn-handler");
  16 |         // cookieIsVisible.then(async (response) => {
  17 |         //     if(response) await page.locator("#onetrust-accept-btn-handler").click();
  18 |         // })
  19 |
  20 |         //Rellenando los valores de la búsqueda
  21 |
  22 |         //Origen
> 23 |         const origen = await page.locator("#originDiv").click();
     |                                                         ^ Error: locator.click: Target page, context or browser has been closed
  24 |         await origen.getByPlaceholder("Origen").fill("Cali");
  25 |         origen.press("Enter");
  26 |         await page.locator(".station-control-list_item_link").first().click();
  27 |
  28 |         //Destino
  29 |         const destino = await page.locator(".control_field-inbound").first().click();
  30 |         await destino.getByPlaceholder("Hacia").fill("Arauca");
  31 |         await page.locator(".station-control-list_item_link").first().click();
  32 |
  33 |         //fecha de ida y de vuelta
  34 |         const isCheckIdaYVuelta = await page.locator("#journeytypeId_0").isChecked();
  35 |
  36 |         if (isCheckIdaYVuelta) {
  37 |
  38 |             const ida = await page.locator("#departureDateButtonId");
  39 |             await ida.click();
  40 |             const dayWrapper = await page.locator(".ngb-dp-day:not(.disabled)");
  41 |
  42 |             const datesIda = await dayWrapper.locator(".custom-day_day");
  43 |             await datesIda.first().click();
  44 |
  45 |             const vuelta = await page.locator("#arrivalInputDatePickerId");
  46 |             await vuelta.click();
  47 |
  48 |             const datesVuelta = await dayWrapper.locator(".custom-day_day");
  49 |             await datesVuelta.first().click();
  50 |         }
  51 |         else {
  52 |
  53 |             const ida = await page.locator("#departureDateButtonId");
  54 |             await ida.click();
  55 |             const dayWrapper = await page.locator(".ngb-dp-day:not(.disabled)");
  56 |             const datesIda = await dayWrapper.locator(".custom-day_day");
  57 |             await datesIda.first().click();
  58 |         }
  59 |
  60 |         //buscar button
  61 |         const buttonSearch = await page.locator("#searchButton");
  62 |         await buttonSearch.click();
  63 |     });
  64 | });
```