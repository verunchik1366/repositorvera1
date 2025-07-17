import { test, expect } from '@playwright/test';
import { Mon_Ua } from '../pages/Mon_Ua';

test('Міністерство освіти & науки України', async ({ page }) => {

  const monpage = new Mon_Ua(page);
  const mon = new Mon_Ua(page);
  await mon.goto();

  const newTab = await mon.openNavchalniProgramyInNewTab();
  const monTab = new Mon_Ua(newTab);

  await monTab.goToTypoviOsvitniProhramy();
  await monTab.goToZakonodavstvo();

});