import { test } from '@playwright/test';
import { AniTubePage } from '../pages/AniTubePage';

test('AniTube registration test', async ({ page }) => {
  const aniPage = new AniTubePage(page);
  await aniPage.open();
  await aniPage.openGenreAndSelectAntiUtopia();
  await aniPage.goToRegistrationAndAcceptCookies();
  await aniPage.fillRegistrationForm('fake_user', 'password1234');
  await aniPage.expectPasswordErrorVisible();
});
