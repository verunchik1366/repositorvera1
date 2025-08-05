import { Page, Locator, expect } from '@playwright/test';

export class EatStreet4 {
  readonly page: Page;
  readonly addressInput: Locator;
  readonly searchButton: Locator;
  readonly modal: Locator;
  readonly inlineError: Locator;
  readonly modalOptInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressInput = page.locator('//input[@placeholder="Enter Your Address"]');
    this.searchButton = page.locator('//a[contains(@class, "btn-food-search") and contains(@class, "visible_focus")]');
    this.modal = page.locator('//div[@class="modal-content"][.//text()[contains(., "Address Search Attempt")]]');
    this.inlineError = page.locator('.invalid-address-message');
    this.modalOptInButton = page.locator('//a[@class="modal-opt-in-button"]');
  }

  async goto() {
    await this.page.goto('https://eatstreet.com/', { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL(/eatstreet\.com/);
  }

  async closeModalIfPresent() {
    const isVisible = await this.modalOptInButton.isVisible({ timeout: 3000 }).catch(() => false);
    if (isVisible) {
      console.log(' Closing opt-in modal...');
      await this.modalOptInButton.click();
    }
  }

  async step1_verifyAddressInputVisible() {
    await this.closeModalIfPresent();
    await expect(this.addressInput).toBeVisible({ timeout: 5000 });
    console.log(' Address input is visible');
  }

  async step2_emulateUserClickSearchAndCheckError() {
    await this.addressInput.focus();
    await this.page.keyboard.type(' ');
    await this.page.keyboard.press('Tab');

    await this.page.evaluate(() => {
      const btn = document.querySelector('a.btn-food-search');
      if (btn) (btn as HTMLElement).click();
    });

    const isModalVisible = await this.modal.isVisible({ timeout: 5000 }).catch(() => false);
    const isInlineVisible = await this.inlineError.isVisible({ timeout: 5000 }).catch(() => false);

    if (isModalVisible) {
      console.log(' "Address Search Attempt" is visible');
      await expect(this.modal).toContainText('Address Search Attempt');
    } else if (isInlineVisible) {
      console.log('error message is visible');
      await expect(this.inlineError).toContainText('Tell us where you are, and well find the restaurants!');
    } else {
      throw new Error(' No error message or popup appeared after submitting invalid address');
    }
  }
}

