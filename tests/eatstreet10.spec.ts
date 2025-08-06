import { test } from '@playwright/test';
import { EatStreet10 } from '../pages/EatStreet10';

test('EatStreet10 visual content check', async ({ page }) => {
  const eatStreet = new EatStreet10(page);

  await page.goto('https://eatstreet.com/');

  await eatStreet.precondition_closePopupsIfPresent();
  await eatStreet.step1_checkHungryHappySectionVisible();
  await eatStreet.step2_checkHungryHappyTextVisible();
  await eatStreet.step3_checkHungryHappyImageVisible();
});
