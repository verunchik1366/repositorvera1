import { test, expect } from '@playwright/test';
import { Grinpage } from '../pages/Grinchenko';

test('GrinUniversity', async ({ page }) => {
  const grinpage = new Grinpage(page);
  await grinpage.goto();
  await grinpage.StudparBtn.click();
  await grinpage.StudparBtn.click();
  await grinpage.StatyStunentom.click();
  await grinpage.logoBtn.click();
  await expect (grinpage.PrahnemoDoskonalosti).toBeVisible;
})