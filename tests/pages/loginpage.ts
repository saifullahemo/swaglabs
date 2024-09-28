import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    
    // Define the selectors for the elements on the login page
    private usernameInput = '#user-name';
    private passwordInput = '#password';
    private loginButton = '#login-button';
    private errorMessage = '[data-test="error"]'; // Example selector for error message

    // Initialize with the Page instance
    constructor(page: Page) {
        this.page = page;
    }

    // Method to navigate to the login page
    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    // Method to enter the username
    async enterUsername(username: string) {
        await this.page.fill(this.usernameInput, username);
    }

    // Method to enter the password
    async enterPassword(password: string) {
        await this.page.fill(this.passwordInput, password);
    }

    // Method to click the login button
    async clickLoginButton() {
        await this.page.click(this.loginButton);
    }

    // Method to perform the login action
    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    // Method to check if login error message is displayed
    async isErrorVisible() {
        return this.page.isVisible(this.errorMessage);
    }
}
