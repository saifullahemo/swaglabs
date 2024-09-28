import { Page } from '@playwright/test';

export class CheckoutPage {
    private page: Page;

    // Define selectors for the checkout form
    private firstNameInput = '[data-test="firstName"]';
    private lastNameInput = '[data-test="lastName"]';
    private postalCodeInput = '[data-test="postalCode"]';
    // private continueButton = '[data-test="continue"]';
    private continueButton = '.cart_button';
    private finishButton = '.cart_button';
    private checkoutCompleteText = '.complete-header';  // Selector for confirming checkout completion

    constructor(page: Page) {
        this.page = page;
    }

    // Method to fill out checkout information
    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.postalCodeInput, postalCode);
    }

    // Method to proceed to the next step in checkout
    async continueCheckout() {
        await this.page.click(this.continueButton);
    }

    // Method to finish the checkout process
    async finishCheckout() {
        await this.page.click(this.finishButton);
    }

    // Method to verify if checkout is complete
    async isCheckoutComplete() {
        return this.page.isVisible(this.checkoutCompleteText);
    }
}
