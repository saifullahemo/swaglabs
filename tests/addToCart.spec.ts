import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginpage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';

test('should add items to the cart and verify them', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Login as standard_user
    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 2: Add items to the cart
    const itemName1 = 'Sauce Labs Backpack';
    const itemName2 = 'Sauce Labs Bike Light';
    await inventoryPage.addItemToCart(itemName1);
    await inventoryPage.addItemToCart(itemName2);

    // Step 3: Navigate to the cart
    await inventoryPage.navigateToCart();

    // Step 4: Verify that the correct items were added to the cart
    expect(await cartPage.isItemInCart(itemName1)).toBeTruthy();
    expect(await cartPage.isItemInCart(itemName2)).toBeTruthy();
});
