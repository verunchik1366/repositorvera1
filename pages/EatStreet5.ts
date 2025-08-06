import { Page, Locator, expect } from '@playwright/test'; // Додано expect в імпорти

export class EatStreet5 {
  readonly page: Page;
  readonly saveBigContainer: Locator;
  readonly emailInput: Locator;
  readonly nameInput: Locator;
  readonly checkbox: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.saveBigContainer = page.locator('div.container--fluid:has-text("Save Big, Eat Happy!")');
    this.emailInput = page.locator('input#new-email');
    this.nameInput = page.locator('input#new-name');
    this.checkbox = page.locator('input[type="checkbox"]');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async verifyAllElements() {
    await this.saveBigContainer.waitFor();
    await this.emailInput.waitFor();
    await this.nameInput.waitFor();
    await this.checkbox.waitFor();
    await this.submitButton.waitFor();

    await expect(this.saveBigContainer).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.nameInput).toBeVisible();
    await expect(this.checkbox).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }
}