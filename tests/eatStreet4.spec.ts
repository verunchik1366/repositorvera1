import { test } from '@playwright/test';
import { EatStreet4 } from '../pages/EatStreet4';

test('EatStreet address popup appears without valid input', async ({ page }) => {
  const eatStreet = new EatStreet4(page);

  await eatStreet.goto();
  await eatStreet.step1_verifyAddressInputVisible();
  await eatStreet.step2_emulateUserClickSearchAndCheckError();
});
