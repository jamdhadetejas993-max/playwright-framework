import test, { expect, Page } from '@playwright/test';

test('Radio Button Test', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.locator('#headingOne .accordion-button').check();
    await page.getByText(' Radio Button').click();
    

})