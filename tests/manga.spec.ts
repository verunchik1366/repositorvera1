import { test } from '@playwright/test';
import { MangaPage } from '../pages/MangaPage';

test('animetube test', async ({ page }) => {
  const mangaPage = new MangaPage(page);
  await mangaPage.openHomePage();
  await mangaPage.navigateToYaoi();
  await mangaPage.openLiveta();
  await mangaPage.confirmAgeIfPrompted();
});
