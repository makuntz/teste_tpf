// @ts-check
const { test, expect } = require('@playwright/test');






test.describe('New Todo', () => {
  test('aplicacao de teste', async ({ page }) => {

    // await page.goto('https://localhost:3000/dashboard', {timeout:0})
    await page.click('.containerLogin > .transparente > .formLogin > a > .logar')
  
  });
});



/**
 * @param {import('@playwright/test').Page} page
 * @param {number} expected
 */
//  async function checkNumberOfTodosInLocalStorage(page, expected) {
//   return await page.waitForFunction(e => {
//     return JSON.parse(localStorage['react-todos']).length === e;
//   }, expected);
// }

// /**
//  * @param {import('@playwright/test').Page} page
//  * @param {number} expected
//  */
//  async function checkNumberOfCompletedTodosInLocalStorage(page, expected) {
//   return await page.waitForFunction(e => {
//     return JSON.parse(localStorage['react-todos']).filter(i => i.completed).length === e;
//   }, expected);
// }

// /**
//  * @param {import('@playwright/test').Page} page
//  * @param {string} title
//  */
// async function checkTodosInLocalStorage(page, title) {
//   return await page.waitForFunction(t => {
//     return JSON.parse(localStorage['react-todos']).map(i => i.title).includes(t);
//   }, title);
// }
