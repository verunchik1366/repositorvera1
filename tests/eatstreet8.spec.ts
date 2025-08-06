import { test } from '@playwright/test';
import { EatStreet8 } from '../pages/EatStreet8';

test('EatStreet7 test steps', async ({ page }) => {
  const eatStreet = new EatStreet8(page);

  await page.goto('https://eatstreet.com/');

  await eatStreet.precondition_closePopupIfVisible();
  await eatStreet.step1_checkHeroTextVisible();
  await eatStreet.step2_clickApplyNowAndCheckURL();
  await eatStreet.step3_clickLogoAndCheckURL();
});
