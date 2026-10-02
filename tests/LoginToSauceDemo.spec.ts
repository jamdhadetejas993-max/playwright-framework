import {test , expect} from '@playwright/test';
import { LoginPage } from './SauceDemoPage/LoginPage';
import { ProductsPage } from './SauceDemoPage/ProductsPage';
import { CheckoutPage } from './SauceDemoPage/Checkoutpage';

test('Login to SauceDemo', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const product = new ProductsPage(page);
    const checkout = new CheckoutPage(page);
    await loginPage.navigate('https://www.saucedemo.com/');
    await loginPage.waitForPageLoad();
    await loginPage.login('standard_user', 'secret_sauce');

   const isProduct =  await product.isProductFieldVisible();
   expect(isProduct).toBeTruthy();
    const isLogo = await product.isLogoPresent();
    expect(isLogo).toBeTruthy();

    await product.verifyProductList();
    await product.addProductToCart('Test.allTheThings() T-Shirt (Red)');

    await product.clickShoppingCart();
    const productNameInCart = await checkout.getProductNameInCart();
    expect(productNameInCart).toBe('Test.allTheThings() T-Shirt (Red)');
}) 