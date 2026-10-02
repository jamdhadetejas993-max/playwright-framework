import test, { expect, Page } from '@playwright/test';

test('Assertion', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    const loginLogo = page.locator('.login_logo')
    await expect(loginLogo).toBeVisible()
    const usernameInput = page.locator('#user-name')
    await expect(usernameInput).toBeEnabled();
    ;

}); 