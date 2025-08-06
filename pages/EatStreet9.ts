import { Page, Locator, expect } from '@playwright/test';

export class EatStreet9 {
  readonly page: Page;
  readonly consentButton: Locator;
  readonly modalOptInButton: Locator;
  readonly heroText: Locator;
  readonly getAppLink: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.consentButton = page.locator('//button[@class="cipa-explict-consent"]');
    this.modalOptInButton = page.locator('//a[@class="modal-opt-in-button"]');
    this.heroText = page.locator('//div[@class="container"][.//text()[contains(.,"EatStreet is the Smartest Way to Order Food Online")]]');
    this.getAppLink = page.locator('//a[@class="how-it-works_link"][.//text()[contains(.,"Get The App")]]');
    this.logo = page.locator('//a[@class="logo margin-right-20"]');
  }

  async precondition_closePopupIfVisible() {
    if (await this.consentButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.consentButton.click();
    }

    if (await this.modalOptInButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.modalOptInButton.click();
    }
  }

  async step1_checkHeroTextVisible() {
    await expect(this.heroText).toBeVisible();
  }

  async step2_clickGetAppAndCheckURL() {
    await this.getAppLink.click();
    await expect(this.page).toHaveURL('https://eatstreet.com/get-the-app');
  }

  async step3_clickLogoAndCheckURL() {
    await this.logo.click();
    await expect(this.page).toHaveURL('https://eatstreet.com/');
  }
}
