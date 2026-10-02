import {Page, expect} from '@playwright/test';
import {BasePage} from './BasePage';

export class ProductsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    private productText = ".title";
    private logo = ".app_logo";
    private productlist = ".inventory_item ";
    private productTitle = ".inventory_item_name";
    private productDescription = ".inventory_item_desc";
    private productPrice = ".inventory_item_price"
    private addToCartButton = ".btn_inventory";
    private shoppingCartButton = ".shopping_cart_link";

    async  clickShoppingCart() {
        await this.page.locator(this.shoppingCartButton).click();
    }

    async addProductToCart(targetProductName: string) {
        const productCount = await this.page.locator(this.productlist).count();
        for (let i = 0; i < productCount; i++) {
            const productName = await this.page.locator(this.productlist).nth(i).locator(this.productTitle).innerText();
            console.log(productName);

            if(productName?.trim() === targetProductName.trim()) {
                await this.page.locator(this.productlist).nth(i).locator(this.addToCartButton).click();
                console.log(`'${targetProductName}' has been added to the cart.`);
                return;
            }
        }
        throw new Error(`Product '${targetProductName}' not found`);

    }

    async isProductFieldVisible() : Promise<boolean> {
       return await this.page.locator(this.productText).isVisible();
}

async isLogoPresent() : Promise<boolean> {
    return await this.page.locator(this.logo).isVisible();
}

async verifyProductList() {
const productCount = await this.page.locator(this.productlist).count();
console.log(`'Number of products:', ${productCount}`);
for (let i = 0; i < productCount; i++) {
    {
        const productName = await this.page.locator(this.productlist).nth(i).locator(this.productTitle).innerText();
         console.log(`Product ${i + 1} Name: ${productName}`);

         if(!productName) {
            throw new Error(`Product ${i + 1} is missing a title`);
         }

       const productDescription = await this.page.locator(this.productlist).nth(i).locator(this.productDescription).innerText();
         console.log(`Product ${i + 1} Description: ${productDescription}`);

         if(!productDescription) {
            throw new Error(`Product ${i + 1} is missing a description`);
         }

       const productPrice = await this.page.locator(this.productlist).nth(i).locator(this.productPrice).innerText();
         console.log(`Product ${i + 1} Price: ${productPrice}`);

         if(!productPrice) {
            throw new Error(`Product ${i + 1} is missing a price`);
         }

         const addToCartButton = await this.page.locator(this.productlist).nth(i).locator(this.addToCartButton).innerText();
         console.log(`Product ${i + 1} Add to Cart Button: ${addToCartButton}`);

         if(!addToCartButton) {
            throw new Error(`Product ${i + 1} is missing an add to cart button`);
         }

}
}
}
}