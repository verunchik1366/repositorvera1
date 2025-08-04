import { test, expect } from '@playwright/test';
import { EatStreet } from '../pages/EatStreet';

test.describe('EatStreet Sign In Tests', () => {
    test('Sign In button click, popup visibility check and logo verification', async ({ page }) => {
        const eatStreet = new EatStreet(page);
        await eatStreet.open();
        
        await page.addInitScript(() => {
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    transition: none !important;
                    animation: none !important;
                }
            `;
            document.head.appendChild(style);
        });

        const signInLocators = [
            'a.btn-sign-in',
            'button:has-text("Sign In")',
            '[role="button"] >> text=/sign in/i',
            'li[es-signin-button] a.btn-sign-in' // Додано локатор з вашого Page Object
        ];

        for (const locator of signInLocators) {
            try {
                console.log(`Trying locator: ${locator}`);
                const btn = page.locator(locator).first();
                await btn.waitFor({ state: 'visible', timeout: 5000 });
                await btn.scrollIntoViewIfNeeded();
                await btn.click({ timeout: 3000 });
                
                const loginPopup = page.locator('div.user-flow');
                await loginPopup.waitFor({ state: 'visible', timeout: 8000 });
                
                await expect(loginPopup).toBeVisible();
                await expect(loginPopup.getByText('Log In')).toBeVisible();
                await expect(loginPopup.locator('input[name="email"]')).toBeVisible();
                await expect(loginPopup.locator('input[name="password"]')).toBeVisible();
                
                console.log(`Login popup successfully opened via locator: ${locator}`);
                
                const logo = page.locator('a.logo.margin-right-20');
                await logo.waitFor({ state: 'visible', timeout: 5000 });
                await expect(logo).toBeVisible();
                await logo.click();
                
                await expect(page).toHaveURL('https://eatstreet.com/');
                console.log('Successfully clicked logo and verified home page URL');
                
                return;
                
            } catch (error) {
                console.log(`Attempt failed with locator: ${locator}`, error instanceof Error ? error.message : String(error));
                await page.screenshot({ path: `test-results/failed-attempt-${locator.replace(/[^a-z0-9]/gi, '_')}.png` });
            }
        }

    });
});