import { test } from '@playwright/test';
import { EatStreet2 } from '../pages/EatStreet2';

test('EatStreet delivery/takeout checkbox test', async ({ page }) => {
  const eatstreet2 = new EatStreet2(page);

  await eatstreet2.goto();

  await eatstreet2.step1_checkDeliveryVisible();
  await eatstreet2.step2_clickTakeout_checkDeliveryVisible();
  await eatstreet2.step3_clickDelivery_checkVisible();
  await eatstreet2.step4_reload_checkDeliveryVisible();
});
