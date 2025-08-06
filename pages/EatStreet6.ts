import { Page, Locator, expect } from '@playwright/test';

export class EatStreet6 {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly signUpYourRestaurant: Locator;
  readonly joinOurTeam: Locator;
  readonly downloadTheApp: Locator;

  constructor(page: Page) {
    this.page = page;

    this.mainHeading = page.locator('//div[@class="container"][.//text()[contains(., "EatStreet is the Smartest Way to Order Food Online")]]');

    this.signUpYourRestaurant = page.locator('//div[@class="col-4 padding-right-20 padding-left-20 text-left"][.//text()[contains(., "Sign Up Your Restaurant")]]');

    this.joinOurTeam = page.locator('//div[@class="col-4 padding-right-20 padding-left-20 text-left"][.//text()[contains(., "Join Our Team")]]');

    this.downloadTheApp = page.locator('//div[@class="col-4 padding-right-20 padding-left-20 text-left"][.//text()[contains(., "Download The App")]]');
  }

  async verifyMainHeadingPresent() {
    await expect(this.mainHeading).toHaveCount(1);
  }

  async verifySignUpYourRestaurantVisible() {
    await expect(this.signUpYourRestaurant).toBeVisible();
  }

  async verifyJoinOurTeamVisible() {
    await expect(this.joinOurTeam).toBeVisible();
  }

  async verifyDownloadTheAppVisible() {
    await expect(this.downloadTheApp).toBeVisible();
  }
}
