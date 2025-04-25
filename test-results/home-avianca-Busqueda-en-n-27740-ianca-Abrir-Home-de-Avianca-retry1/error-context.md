# Test info

- Name: Busqueda en newSite de avianca >> Abrir Home de Avianca
- Location: C:\Users\framir02\projects\avianca\playwright\tests\home-avianca.spec.js:4:9

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('#originBtn')
    - locator resolved to <button hidden="" id="originBtn" _ngcontent-icv-c8="" aria-haspopup="true" aria-expanded="false" class="control_field_button">…</button>
    - fill("Cali")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    4 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 500ms
    - waiting for element to be visible, enabled and editable

    at C:\Users\framir02\projects\avianca\playwright\tests\home-avianca.spec.js:22:42
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#maincontent"
- banner:
  - navigation "Settings menu":
    - list:
      - listitem: Vianca Chat
      - listitem:
        - 'combobox ": Español is selected"': 
      - listitem:
        - button " Colombia ( COP )"
  - link "avianca":
    - /url: /es/
    - img "avianca"
  - navigation "Main navigation":
    - list:
      - listitem:
        - link "Reservar":
          - /url: /es/
      - listitem:
        - button "Ofertas y destinos"
      - listitem:
        - button "Tu reserva Check-in"
      - listitem:
        - button "Información y ayuda"
      - listitem:
        - button "lifemiles"
  - link "Cuenta lifemiles":
    - /url: https://sso.lifemiles.com/auth/realms/lifemiles/protocol/openid-connect/auth?client_id=lifemiles&response_type=code&scope=openid&login_hint=wst&ui_locales=es&redirect_uri=https://www.lifemiles.com/oauth-signin/&state=1739822969470µsiteParams=%7B%27Access-Level%27%3A%20%270%27%2C%20%27Redirect-Uri%27%3A%20%27%27%7D&utm_source=avianca&utm_medium=referral&utm_campaign=button2_lifemiles
    - button "Cuenta lifemiles"
- main:
  - tabpanel:
    - tabpanel:
      - radio "Ida y vuelta" [checked]
      - text: Ida y vuelta
      - radio "Solo ida"
      - text: Solo ida
      - checkbox
      - text: Comparar vuelos con millas
      - link "Hoteles":
        - /url: https://sp.booking.com/dealspage.html?aid=2434507&label=hotels_shortcut
        - button "Hoteles"
      - link "Autos":
        - /url: https://www.rentalcars.com/?affiliateCode=avianca695&adplat=cardlandingpage
        - button "Autos"
      - text: Origen  Origen
      - textbox "El foco se moverá al siguiente campo al seleccionar una opción"
      - text:  Destino
      - textbox "El foco se moverá al siguiente campo al seleccionar una opción"
      - list
      - text: Fechas  Ida
      - textbox "Search.Search_DepartDateFormatLabel dd/MM/yyyy": 28/04/2025
      - status: Search.Search_DepartDateSelectedLabel
      - text:  Vuelta
      - textbox "Search.Search_ReturnDateFormatLabel dd/MM/yyyy": 01/05/2025
      - status: Search.Search_ReturnDateSelectedLabel
      - text: Pasajeros 
      - button "Pasajeros :1": 1 
      - button "Buscar"
  - heading "¡Más de 80 destinos esperan por ti!" [level=1]
  - paragraph: Medellín, Cali, Fort Lauderdale, Sao Paulo, Buenos Aires y muchos lugares más por recorrer
  - text: 
  - link "Compra ya":
    - /url: /es/ofertas-destinos/ofertas-de-vuelos/
  - heading "Ofertas desde" [level=2]:
    - heading "Ofertas desde" [level=2]
    - 'combobox "Seleccionar ciudad: Bogotá is selected"': 
  - list:
    - listitem:
      - link "Armenia COP 213.500 Por trayecto desde"
    - listitem:
      - link "Medellín COP 219.500 Por trayecto desde"
    - listitem:
      - link "Bucaramanga COP 241.500 Por trayecto desde"
  - link "Descubrir más ofertas ":
    - /url: /es/ofertas-y-promociones/ofertas-de-vuelos/
  - heading "Prepárate para viajar" [level=2]
  - button "Check-in online Obtén tu pase de abordar y ahorra tiempo en el aeropuerto.":
    - heading "Check-in online" [level=3]
    - text: Obtén tu pase de abordar y ahorra tiempo en el aeropuerto.
  - button "Centro de ayuda Busca y encuentra información útil para resolver tus preguntas.":
    - heading "Centro de ayuda" [level=3]
    - text: Busca y encuentra información útil para resolver tus preguntas.
  - button "Requisitos para viajar Infórmate acerca de visas, vacunas y demás documentos.":
    - heading "Requisitos para viajar" [level=3]
    - text: Infórmate acerca de visas, vacunas y demás documentos.
  - heading "Conoce las novedades de lifemiles" [level=2]
  - text: Suscríbete a lifemiles+ y recibe un descuento exclusivo al redimir tiquetes con avianca
  - link "Suscríbete ya":
    - /url: https://www.lifemiles.com/landing/clublm?utm_source=avianca&utm_medium=referral&utm_campaign=banner_secundario
    - strong: Suscríbete ya
  - text: Tu tarjeta de crédito con hasta 20,000 millas de bienvenida
  - link "Aplica ya":
    - /url: https://www.lifemiles.com/credit-card/get-credit-card?utm_source=avianca&utm_medium=referral&utm_campaign=banner_secundario
    - strong: Aplica ya
  - text: Más millas por dólar volando en cualquiera de nuestras tarifas
  - link "Conoce más":
    - /url: https://www.lifemiles.com/landing/partners/airline/AV-earn?utm_source=avianca&utm_medium=referral&utm_campaign=banner_secundario
    - strong: Conoce más
  - heading "Más información de interés" [level=2]
  - button "Experiencia avianca ¡Listo para despegar! Descubre los servicios a bordo que te ofrecemos al volar con nosotros.":
    - heading "Experiencia avianca" [level=3]
    - text: ¡Listo para despegar! Descubre los servicios a bordo que te ofrecemos al volar con nosotros.
  - button "Equipaje Entérate de las condiciones que debes tener en cuenta al momento de preparar tu equipaje.":
    - heading "Equipaje" [level=3]
    - text: Entérate de las condiciones que debes tener en cuenta al momento de preparar tu equipaje.
  - button "Unidos contra el fraude Protege tu viaje comprando tus tiquetes y servicios adicionales en nuestros canales oficiales.":
    - heading "Unidos contra el fraude" [level=3]
    - text: Protege tu viaje comprando tus tiquetes y servicios adicionales en nuestros canales oficiales.
  - button "Inspírate Explora nuestros destinos y planea tu próxima aventura. Sácale provecho a tu siguiente vuelo.":
    - heading "Inspírate" [level=3]
    - text: Explora nuestros destinos y planea tu próxima aventura. Sácale provecho a tu siguiente vuelo.
  - heading "Complementa tu experiencia" [level=2]
  - heading "Reserva de hoteles" [level=3]
  - text: Cientos de alojamientos con hasta 15% DCTO te esperan en
  - link "Booking.com.":
    - /url: https://sp.booking.com/dealspage.html?aid=2434507&label=hotels_banner_experiencia
  - heading "Alquiler de autos" [level=3]
  - text: Movilízate a tu ritmo con hasta 15% DCTO en tu próximo destino con
  - link "Rentalcars.com.":
    - /url: https://www.rentalcars.com/?affiliateCode=avianca695&adplat=cardlandingpage
  - heading "Tours y excursiones" [level=3]
  - text: Descubre actividades en los principales destinos turísticos del mundo con
  - link "Civitatis.":
    - /url: https://avianca.civitatis.com/es/
  - heading "Todo en una sola reserva" [level=3]
  - text: Muy pronto podrás comprar tus tiquetes aéreos + alojamiento, auto y más en un solo lugar.
- contentinfo "Site":
  - link "avianca":
    - /url: /es/
    - img "avianca logo"
  - heading "¿Estás buscando ofertas?" [level=3]
  - paragraph: Suscríbete y sé el primero en recibir ofertas personalizadas en tu correo.
  - textbox "correo@mail.com"
  - button "Suscríbete"
  - paragraph:
    - text: Al suscribirme acepto la
    - link "Política de Privacidad":
      - /url: /es/informacion-legal/politica-privacidad/
    - text: y el uso de mis datos personales para recibir ofertas.
  - region:
    - paragraph: ¡Síguenos!
    - list:
      - listitem:
        - link " twitter":
          - /url: https://twitter.com/avianca
      - listitem:
        - link " facebook":
          - /url: https://es-la.facebook.com/AviancaGlobal/
      - listitem:
        - link " youtube":
          - /url: https://www.youtube.com/user/aviancachannel
      - listitem:
        - link " instagram":
          - /url: https://www.instagram.com/avianca/?hl=es-la
  - heading "Descubre y compra" [level=2]:
    - button "Descubre y compra" [expanded]
  - list "Descubre y compra":
    - listitem:
      - link "Vuelos baratos":
        - /url: /es/ofertas-destinos/ofertas-de-vuelos/
    - listitem:
      - link "Reservas de hoteles":
        - /url: https://sp.booking.com/dealspage.html?aid=2434507&label=hotels_shortcut
    - listitem:
      - link "Alquiler de autos":
        - /url: https://www.rentalcars.com/?affiliateCode=avianca695&adplat=cardlandingpage
    - listitem:
      - link "Tours y excursiones":
        - /url: https://avianca.civitatis.com/es/
    - listitem:
      - link "Asistencia en viaje":
        - /url: https://ayuda.avianca.com/hc/es/articles/13523002282651
    - listitem:
      - link "avianca connect":
        - /url: https://connect.avianca.com/es
  - button "Sobre nosotros" [expanded]
  - list "Sobre nosotros":
    - listitem:
      - link "Somos avianca":
        - /url: /es/sobre-nosotros/somos-avianca/
    - listitem:
      - link "Trabaja con nosotros":
        - /url: https://jobs.avianca.com/?_ga=2.159730301.1902998134.1534167185-1083287843.1533248002/
    - listitem:
      - link "Noticias corporativas":
        - /url: /es/sobre-nosotros/noticias-corporativas/
    - listitem:
      - link "Alianzas y beneficios":
        - /url: /es/sobre-nosotros/alianzas-y-beneficios/
    - listitem:
      - link "Sostenibilidad":
        - /url: /es/sobre-nosotros/sostenibilidad/
    - listitem:
      - link "Plan de accesibilidad":
        - /url: /es/sobre-nosotros/somos-avianca/accesibilidad-e-inclusion/
  - button "Nuestros portales" [expanded]
  - list "Nuestros portales":
    - listitem:
      - link "Programa lifemiles":
        - /url: https://www.lifemiles.com/
    - listitem:
      - link "avianca empresas":
        - /url: https://empresas.avianca.com/
    - listitem:
      - link "aviancadirect":
        - /url: /es/portales-aliados/aviancadirect-ndc/
    - listitem:
      - link "avianca trade":
        - /url: https://aviancatrade.zendesk.com/hc/es
    - listitem:
      - link "avianca cargo":
        - /url: https://www.aviancacargo.com//indexes.aspx
    - listitem:
      - link "Relación con inversionistas":
        - /url: https://ir.avianca.com/
  - button "Enlaces rápidos" [expanded]
  - list "Enlaces rápidos":
    - listitem:
      - link "Información legal":
        - /url: /es/informacion-legal/informacion-legal/
    - listitem:
      - link "Política de privacidad":
        - /url: /es/informacion-legal/politica-privacidad/
    - listitem:
      - link "Contrato de transporte":
        - /url: /es/informacion-legal/contrato-de-transporte/
    - listitem:
      - link "Artículos restringidos":
        - /url: https://ayuda.avianca.com/hc/es/sections/13499643885467
    - listitem:
      - link "Plan de contingencia":
        - /url: /es/informacion-legal/plan-de-contingencia/
    - listitem:
      - link "Contáctanos":
        - /url: /es/sobre-nosotros/contactanos/
    - listitem:
      - link "Factura electrónica":
        - /url: https://ayuda.avianca.com/hc/es/articles/15398664877723
  - paragraph: Copyright © Avianca 2025
  - list:
    - listitem:
      - img "eCommerce Award"
    - listitem:
      - link "Logo Aeronáutica Civil":
        - /url: https://www.aerocivil.gov.co/
        - img "Logo Aeronáutica Civil"
    - listitem:
      - link "Logo Star Alliance":
        - /url: https://www.staralliance.com/
        - img "Logo Star Alliance"
    - listitem:
      - link "Logo SuperTransporte":
        - /url: https://www.supertransporte.gov.co/
        - img "Logo SuperTransporte"
    - listitem
  - link "Powered by":
    - /url: http://newshore.es
- button " Scroll Back To Top"
- img
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
  15 |         const cookieIsVisible = page.isVisible("#onetrust-accept-btn-handler");
  16 |         if (cookieIsVisible) page.locator("#onetrust-accept-btn-handler").click();
  17 |
  18 |         // Rellenando los valores de la búsqueda
  19 |
  20 |         // Origen
  21 |         page.locator("#originBtn").click();
> 22 |         await page.locator("#originBtn").fill("Cali");
     |                                          ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  23 |         page.press("Enter");
  24 |         await page.locator(".station-control-list_item_link").first().click();
  25 |
  26 |         //Destino
  27 |         const destino = await page.locator(".control_field-inbound").first();
  28 |         await destino.getByPlaceholder("Hacia").fill("Arauca");
  29 |         await page.locator(".station-control-list_item_link").first().click();
  30 |
  31 |         //fecha de ida y de vuelta
  32 |         const isCheckIdaYVuelta = await page.locator("#journeytypeId_0").isChecked();
  33 |
  34 |         if (isCheckIdaYVuelta) {
  35 |
  36 |             const ida = await page.locator("#departureDateButtonId");
  37 |             await ida.click();
  38 |             const dayWrapper = await page.locator(".ngb-dp-day:not(.disabled)");
  39 |
  40 |             const datesIda = await dayWrapper.locator(".custom-day_day");
  41 |             await datesIda.first().click();
  42 |
  43 |             const vuelta = await page.locator("#arrivalInputDatePickerId");
  44 |             await vuelta.click();
  45 |
  46 |             const datesVuelta = await dayWrapper.locator(".custom-day_day");
  47 |             await datesVuelta.first().click();
  48 |         }
  49 |         else {
  50 |
  51 |             const ida = await page.locator("#departureDateButtonId");
  52 |             await ida.click();
  53 |             const dayWrapper = await page.locator(".ngb-dp-day:not(.disabled)");
  54 |             const datesIda = await dayWrapper.locator(".custom-day_day");
  55 |             await datesIda.first().click();
  56 |         }
  57 |
  58 |         //buscar button
  59 |         const buttonSearch = await page.locator("#searchButton");
  60 |         await buttonSearch.click();
  61 |     });
  62 | });
```