import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikipediaHomePage';

test('Search Paris', async ({ page }) => {
  const wikiHomePage = new WikiHomePage(page);
  await wikiHomePage.goto();
  await wikiHomePage.wikipediaSearchInput.fill('Париж');
  await wikiHomePage.searchBtn.click();
  await expect (wikiHomePage.emblemOfParisImage).toBeVisible();
});
