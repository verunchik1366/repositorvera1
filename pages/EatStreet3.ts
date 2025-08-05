import { Page, Locator, expect } from '@playwright/test';

export class EatStreet3 {
  readonly page: Page;
  readonly deliveryCheckboxLabel: Locator;
  readonly takeoutCheckboxLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.deliveryCheckboxLabel = page.locator('//label[@for="home-checkbox-delivery"]');
    this.takeoutCheckboxLabel = page.locator('//label[@for="home-checkbox-takeout"]');
  }

  async goto() {
    await this.page.goto('https://eatstreet.com/', { waitUntil: 'domcontentloaded' });
    await this.takeoutCheckboxLabel.waitFor({ state: 'visible' });
  }

  async step1_checkTakeoutVisible() {
    await expect(this.takeoutCheckboxLabel).toBeVisible({ timeout: 5000 });
  }

  async step2_clickDelivery_checkTakeoutVisible() {
    await this.deliveryCheckboxLabel.click({ force: true });
    await expect(this.takeoutCheckboxLabel).toBeVisible({ timeout: 5000 });
  }

  async step3_clickTakeout_checkTakeoutVisible() {
    await this.takeoutCheckboxLabel.click({ force: true });
    await expect(this.takeoutCheckboxLabel).toBeVisible({ timeout: 5000 });
  }

  async step4_reload_checkTakeoutVisible() {
    await this.page.reload();
    await this.takeoutCheckboxLabel.waitFor({ state: 'visible' });
    await expect(this.takeoutCheckboxLabel).toBeVisible({ timeout: 5000 });
  }
}
