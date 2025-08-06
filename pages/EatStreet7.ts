import { Page, Locator, expect } from '@playwright/test';

export class EatStreet7 {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartPopupHeader: Locator;
  readonly emailInputRow: Locator;
  readonly nameInputRow: Locator;
  readonly checkboxContainer: Locator;
  readonly consentButton: Locator;
  readonly modalOptInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('//a[@class="coupon-widget-overlay ng-scope"]');
    this.cartPopupHeader = page.locator('//div[@class="email-widget-popup-header"]');
    this.emailInputRow = page.locator('//div[@class="coupon-widget-row"][.//input[@id="new-email"]]');
    this.nameInputRow = page.locator('//div[@class="coupon-widget-row"][.//input[@id="new-name"]]');
    this.checkboxContainer = page.locator('//div[@class="widget-check-box"][.//input[@type="checkbox"]]');
    this.consentButton = page.locator('//button[@class="cipa-explict-consent"]');
    this.modalOptInButton = page.locator('//a[@class="modal-opt-in-button"]');
  }

  async handle() {
    if (await this.consentButton.isVisible().catch(() => false)) {
      await this.consentButton.click();
    }

    if (await this.modalOptInButton.isVisible().catch(() => false)) {
      await this.modalOptInButton.click();
    }
  }

  async step1_clickCartAndCheckPopup() {
    await this.cartIcon.waitFor({ state: 'visible', timeout: 5000 });
    await this.cartIcon.click();
    await expect(this.cartPopupHeader).toBeVisible();
  }

  async step2_checkEmailInputVisible() {
    await expect(this.emailInputRow).toBeVisible();
  }

  async step3_checkNameInputAndCheckboxVisible() {
    await expect(this.nameInputRow).toBeVisible();
    await expect(this.checkboxContainer).toBeVisible();
  }
}
