const {test, expect} = require('@playwright/test');

test('test1', async ({ page})=>{
    await page.goto('https://www.google.com/');
    await expect.soft(page).toHaveTitle('Googlee');



})