import { test } from '@playwright/test';
import { EatStreet6 } from '../pages/EatStreet6';

test('EatStreet6: Verify homepage marketing blocks', async ({ page }) => {
  const eatStreet = new EatStreet6(page);
  await page.goto('https://eatstreet.com/');

  await eatStreet.verifyMainHeadingPresent();
  await eatStreet.verifySignUpYourRestaurantVisible();
  await eatStreet.verifyJoinOurTeamVisible();
  await eatStreet.verifyDownloadTheAppVisible();
});
