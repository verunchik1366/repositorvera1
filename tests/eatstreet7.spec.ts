import { test } from '@playwright/test';
import { EatStreet7 } from '../pages/EatStreet7';

test('EatStreet7 test steps', async ({ page }) => {
  const eatStreet = new EatStreet7(page);

  await page.goto('https://eatstreet.com/');

  await eatStreet.handle();
  await eatStreet.step1_clickCartAndCheckPopup();
  await eatStreet.step2_checkEmailInputVisible();
  await eatStreet.step3_checkNameInputAndCheckboxVisible();
});
