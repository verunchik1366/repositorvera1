import { Page, Locator, expect } from '@playwright/test';

export class EatStreet10 {
  readonly page: Page;
  readonly consentButton: Locator;
  readonly modalOptInButton: Locator;
  readonly hungryHappySection: Locator;
  readonly hungryHappyText: Locator;
  readonly hungryHappyImage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.consentButton = page.locator('//button[@class="cipa-explict-consent"]');
    this.modalOptInButton = page.locator('//a[@class="modal-opt-in-button"]');

    this.hungryHappySection = page.locator(
      '//div[@class="container"][.//text()[contains(.,"Hungry. Happy. EatStreet.")]]'
    );

    this.hungryHappyText = page.locator(
      `//p[text()="There's hungry, and there's happy. EatStreet was born to be the world's smartest shortcut between the two. We don't make the hoagies, hot wings, or egg rolls, because cooking is best left to cooks. What EatStreet does is make ordering-out as second nature as humanly possible. We combat complicated to hook you up with the food delivery and takeout options you crave, whenever you need it most."]`
    );

    this.hungryHappyImage = page.locator(
      '//img[@alt="Woman in a park enjoying a meal delivered by EatStreet"]'
    );
  }

  async precondition_closePopupsIfPresent() {
    if (await this.consentButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.consentButton.click();
    }

    if (await this.modalOptInButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.modalOptInButton.click();
    }
  }

  async step1_checkHungryHappySectionVisible() {
    await expect(this.hungryHappySection).toBeVisible();
  }

  async step2_checkHungryHappyTextVisible() {
    await expect(this.hungryHappyText).toBeVisible();
  }

  async step3_checkHungryHappyImageVisible() {
    await expect(this.hungryHappyImage).toBeVisible();
  }
}
