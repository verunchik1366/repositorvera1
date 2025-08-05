import { Page, expect, Locator } from '@playwright/test';

export class EatStreet2 {
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
  await this.deliveryCheckboxLabel.waitFor();
}

async step1_checkDeliveryVisible() {
  await expect(this.deliveryCheckboxLabel).toBeVisible({ timeout: 5000 });
}

async step2_clickTakeout_checkDeliveryVisible() {
  await this.takeoutCheckboxLabel.waitFor({ state: 'visible' });
  await this.takeoutCheckboxLabel.click({ force: true });
  await expect(this.deliveryCheckboxLabel).toBeVisible({ timeout: 5000 });
}


async step3_clickDelivery_checkVisible() {
  await this.deliveryCheckboxLabel.click();
  await expect(this.deliveryCheckboxLabel).toBeVisible({ timeout: 5000 });
}

async step4_reload_checkDeliveryVisible() {
  await this.page.reload();
  await this.deliveryCheckboxLabel.waitFor({ state: 'visible' });
  await expect(this.deliveryCheckboxLabel).toBeVisible();
}
}
