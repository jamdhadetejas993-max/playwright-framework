# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginToSauceDemo.spec.ts >> Login to SauceDemo
- Location: tests\LoginToSauceDemo.spec.ts:6:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]: standard_user
      - textbox "Password" [ref=e13]: secret_sauce
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test';
  2  | import { LoginPage } from './SauceDemoPage/LoginPage';
  3  | import { ProductsPage } from './SauceDemoPage/ProductsPage';
  4  | import { CheckoutPage } from './SauceDemoPage/Checkoutpage';
  5  | 
  6  | test('Login to SauceDemo', async ({ page }) => {
  7  |     const loginPage = new LoginPage(page);
  8  |     const product = new ProductsPage(page);
  9  |     const checkout = new CheckoutPage(page);
  10 |     await loginPage.navigate('https://www.saucedemo.com/');
  11 |     await loginPage.waitForPageLoad();
  12 |     await loginPage.login('standard_user', 'secret_sauce');
  13 | 
  14 |    const isProduct =  await product.isProductFieldVisible();
> 15 |    expect(isProduct).toBeTruthy();
     |                      ^ Error: expect(received).toBeTruthy()
  16 |     const isLogo = await product.isLogoPresent();
  17 |     expect(isLogo).toBeTruthy();
  18 | 
  19 |     await product.verifyProductList();
  20 |     await product.addProductToCart('Test.allTheThings() T-Shirt (Red)');
  21 | 
  22 |     await product.clickShoppingCart();
  23 |     const productNameInCart = await checkout.getProductNameInCart();
  24 |     expect(productNameInCart).toBe('Test.allTheThings() T-Shirt (Red)');
  25 | }) 
```