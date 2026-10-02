import test, { expect, Page } from '@playwright/test';

test('Locators practice', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator("input#twotabsearchtextbox").fill('Iphone 14');


   


        

});