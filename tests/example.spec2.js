const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
/* 
  // Navegar a una página de ejemplo
  await page.goto('https://example.com');

  // Hacer clic en un botón
  await page.click('text="More information"');

  // Escribir en un campo de entrada
  await page.fill('#search', 'Playwright');

  // Seleccionar una opción de un menú desplegable
  await page.selectOption('#category', 'web');

  // Esperar hasta que un elemento esté visible
  await page.waitForSelector('#results');

  // Esperar hasta que se complete la navegación después de enviar el formulario
  await page.click('#submit-button');
  await page.waitForNavigation();

  // Cerrar el navegador
  await browser.close(); */

  //----- ejemplo 2
  await page.goto('https://demoqa.com/droppable');

  //await page.click('text="Open Window"')

  //await page.fill('#autocmpelete','Colombia');
  //await page.type('#autocomplete','Colombia');
  //await page.click('#dropdown-class-example')
  //await page.selectOption('text="dropdown-class-example"','Option1');
  
  await page.dragAndDrop('#draggableadsfasdf','#droppable'); //this drags the draggable element and drops it on the droppable element

  await page.waitForTimeout(5000);
  await browser.close();
})();

