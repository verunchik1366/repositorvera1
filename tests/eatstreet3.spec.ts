import { test } from '@playwright/test';
import { EatStreet3 } from '../pages/EatStreet3';

test('EatStreet takeout/delivery visibility test', async ({ page }) => {
  const eatstreet3 = new EatStreet3(page);

  await eatstreet3.goto();

  await eatstreet3.step1_checkTakeoutVisible();
  await eatstreet3.step2_clickDelivery_checkTakeoutVisible();
  await eatstreet3.step3_clickTakeout_checkTakeoutVisible();
  await eatstreet3.step4_reload_checkTakeoutVisible();
})