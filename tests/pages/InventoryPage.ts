import { Page } from '@playwright/test';

export class InventoryPage {
    private page: Page;

    // Define selectors for inventory items and cart button
    private addToCartButton = (itemName: string) => `//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button`;
    private cartIcon = '.shopping_cart_link';

    constructor(page: Page) {
        this.page = page;
    }

    // Method to add an item to the cart by item name
    async addItemToCart(itemName: string) {
        await this.page.click(this.addToCartButton(itemName));
    }

    // Method to navigate to the cart page
    async navigateToCart() {
        await this.page.click(this.cartIcon);
    }
}
