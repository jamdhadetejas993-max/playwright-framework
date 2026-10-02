import test, { expect, Page } from '@playwright/test';

test('Assertion', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.locator('#name').fill('Selenium');
    await page.locator("#email").fill('selenium@example.com');
    await expect(page.locator('#name')).toHaveValue('Selenium');
    await expect(page.locator("#email")).toHaveValue('selenium@example.com');

})