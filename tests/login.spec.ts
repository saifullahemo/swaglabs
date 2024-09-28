import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginpage';

test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to the login page
    await loginPage.navigateToLoginPage();

    // Perform login action
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify that we successfully logged in (replace this with the correct assertion for the page after login)
    expect(page.url()).toBe('https://www.saucedemo.com/v1/inventory.html');
});

test('should display error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to the login page
    await loginPage.navigateToLoginPage();

    // Perform login with invalid credentials
    await loginPage.login('invalid_user', 'wrong_password');

    // Verify the error message is visible
    expect(await loginPage.isErrorVisible()).toBeTruthy();
});
