import { test } from '@playwright/test';
import { EatStreet9 } from '../pages/EatStreet9';

test('EatStreet9 test steps', async ({ page }) => {
  const eatStreet = new EatStreet9(page);

  await page.goto('https://eatstreet.com/');

  await eatStreet.precondition_closePopupIfVisible();
  await eatStreet.step1_checkHeroTextVisible();
  await eatStreet.step2_clickGetAppAndCheckURL();
  await eatStreet.step3_clickLogoAndCheckURL();
});
