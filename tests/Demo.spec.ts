import test, { expect, Page } from '@playwright/test';

test('Launch the browser', async ({ page }) => {

    await page.goto('https://www.google.com/');
    const title = await page.title();
    console.log('Page title is: ' + title);
    expect(title).toBe('Google');

})