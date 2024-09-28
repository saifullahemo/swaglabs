import { Page } from '@playwright/test';

export class CartPage {
    private page: Page;
    private checkButton = '.checkout_button';
    private cartButton = '.cart_button';

    // Define selectors for cart items
    // private cartItem = (itemName: string) => `//div[@class="inventory_item_name" and text()="${itemName}"]`;
    // private cartItem = (itemName: string) => `//div[@class="inventory_item_name" and text()="${itemName}"]`;
    private cartItem = (itemName: string) => `//div[contains(@class, "cart_item") and .//div[text()="${itemName}"]]`;



    constructor(page: Page) {
        this.page = page;
    }

    // Method to check if an item is in the cart
    async isItemInCart(itemName: string) {
        
        await this.page.waitForSelector(this.cartItem(itemName), { timeout: 5000 });  // Adjust timeout if necessary
        return this.page.isVisible(this.cartItem(itemName));

    }

    // Method to proceed to checkout
    async proceedToCheckout() {
        // await this.page.locator(this.checkButton).scrollIntoViewIfNeeded();
        // await this.page.waitForSelector(this.checkButton, { state: 'visible' });
        await this.page.click(this.checkButton);
        // await this.page.click(this.cartButton);

    }
    async completeCheckout() {
        // await this.page.locator(this.checkButton).scrollIntoViewIfNeeded();
        // await this.page.waitForSelector(this.checkButton, { state: 'visible' });
        // await this.page.click(this.checkButton);
        await this.page.click(this.cartButton);

    }
}
