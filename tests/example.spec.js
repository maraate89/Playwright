const { chromium } = require('playwright');
 //const { firefox } = require('playwright');
(async () => {
 // const browser = await chromium.launch(); // Para abrir el navegador Chrome sin verlo por UI
const browser = await chromium.launch({headless: false, slowMo:500,devtools:true}); // Para abrir el navegador Chrome y verlo por UI, slowMo:50 es para que se vea más lento (50ms mas lento
//devtools:true es para que se abra la consola de desarrollador)

  const page = await browser.newPage();
  await page.goto('https://example.com');
  const titulo = await page.title();
  console.log(`El título de la página es: ${titulo}`);
  await browser.close();
})();

