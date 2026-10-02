import test, { expect, Page } from '@playwright/test';

test('Search drop down', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    await page.locator('#twotabsearchtextbox').fill('book');

    await page.waitForSelector('.left-pane-results-container'); // for the search results to load

    await expect(page.locator('.left-pane-results-container')).toBeVisible();

    const suggestionCount = await page.locator("[id*='sac-suggestion-row-']").count();

    console.log(suggestionCount); // search results are visible
    
    await expect(page.locator("[id*='sac-suggestion-row-']")).toHaveCount(suggestionCount); // search results are visible

    const suggestionTexts = await page.locator("[id*='sac-suggestion-row-']").allTextContents();

    console.log(suggestionTexts);

    await expect(page.locator("[id*='sac-suggestion-row-']", { hasText: 'book shelf wooden'}).first()).toBeVisible();

    await page.locator("[id*='sac-suggestion-row-']", { hasText: 'book shelf wooden'}).first().click();





})