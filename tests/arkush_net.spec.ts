import { test, expect } from '@playwright/test';
import { ArKush } from '../pages/Arkush';

test('Switch to arkush', async ({ page }) => {
  const arkush = new ArKush(page);
  await arkush.goto();
  await arkush.search('NeoLira');
  await arkush.tWory.click();
  await arkush.readBtn.click();
  await expect (arkush.page1).toBeVisible();
  await arkush.nextPage.click();
  await expect (arkush.page2).toBeVisible();
  await arkush.nextPage.click();
  await expect (arkush.page3).toBeVisible();
  await arkush.nextPage.click();
  await expect (arkush.page4).toBeVisible();
  await arkush.nextPage.click();
  await expect (arkush.page5).toBeVisible();
  await arkush.nextPage.click();
  await expect (arkush.lastPage).toBeVisible();

})
