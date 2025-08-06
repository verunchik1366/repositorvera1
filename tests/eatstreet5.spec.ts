import { test, expect } from '@playwright/test';
import { EatStreet5 } from '../pages/EatStreet5';

test('Checking the login items on the main page in the Save Big, Eat Happy! section', async ({ page }) => {
  const eatStreet = new EatStreet5(page);

  await page.goto('https://eatstreet.com/');

  await eatStreet.verifyAllElements();
});