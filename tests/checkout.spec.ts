import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginpage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

test('should complete the checkout process successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

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

    // Step 5: Proceed to checkout
    await cartPage.proceedToCheckout();

    // Step 6: Fill in checkout information and continue
    await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
    await checkoutPage.continueCheckout();

    // Step 7: Complete the checkout process
    await checkoutPage.finishCheckout();

    // Step 8: Verify that the checkout is complete
    expect(await checkoutPage.isCheckoutComplete()).toBeTruthy();
});
