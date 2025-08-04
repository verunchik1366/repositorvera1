import { expect, Locator, Page } from '@playwright/test';

export class EatStreet {
    readonly page: Page;
    
    readonly signInButton: Locator;
    readonly loginPopup: Locator;
    readonly logo: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.signInButton = page.locator('li[es-signin-button] a.btn-sign-in');
        this.loginPopup = page.locator('//div[@class="user-flow"]');
        this.logo = page.locator('//a[@class="logo margin-right-20"]');
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
    }

    async open() {
        await this.page.goto('https://eatstreet.com/careers', { 
            waitUntil: 'networkidle' 
        });
    }

    async clickSignIn() {
        await this.signInButton.waitFor({ state: 'visible' });
        await this.signInButton.click();
    }

    async verifyLoginPopupVisible() {
        await this.loginPopup.waitFor({ state: 'visible' });
        await expect(this.loginPopup).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
    }

    async clickLogoAndVerifyHomePage() {
        await this.logo.click();
        await expect(this.page).toHaveURL('https://eatstreet.com/');
    }

    async tryAlternativeSignInLocators() {
        const locators = [
            'a.btn-sign-in',
            'button:has-text("Sign In")',
            '[role="button"] >> text=/sign in/i'
        ];

        for (const locator of locators) {
            const btn = this.page.locator(locator).first();
            if (await btn.isVisible()) {
                await btn.click();
                return true;
            }
        }
        return false;
    }
}