# Test info

- Name: Busqueda en newSite de avianca >> Abrir Home de Avianca
- Location: C:\Users\framir02\projects\avianca\playwright-old\learning-playwright\tests\home-avianca.spec.ts:5:9

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://www.avianca.com/
Call log:
  - navigating to "https://www.avianca.com/", waiting until "load"

    at C:\Users\framir02\projects\avianca\playwright-old\learning-playwright\tests\home-avianca.spec.ts:7:20
```

# Test source

```ts
   1 | import { firefox } from "@playwright/test";
   2 | import { test } from "../utils/functions.utils";
   3 |
   4 | test.describe("Busqueda en newSite de avianca", () => {
   5 |     test('Abrir Home de Avianca', async ({ page }) => {
   6 |
>  7 |         await page.goto("https://www.avianca.com/");
     |                    ^ Error: page.goto: net::ERR_ABORTED at https://www.avianca.com/
   8 |         await page.verifyCookies("#onetrust-accept-btn-handler");
   9 |         await page.waitForTimeout(3000);
  10 |
  11 |         await page.selectOriginFlight("cali");
  12 |         await page.selectDestinationFlight("Bogo");
  13 |         await page.waitForTimeout(3000);
  14 |         await page.selectButtonAndClick("#searchButton");
  15 |
  16 |         await page.waitForTimeout(5000);
  17 |         //await page.waitForSelector("#journeysContainerId_0", { timeout: 30000 });
  18 |     });
  19 | });
```