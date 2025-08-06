import { test } from '@playwright/test';


import { Pianino } from '../pages/Pianino';

test('Piano', async ({ page }) => {
  const pianino = new Pianino(page);
  await pianino.goto();
  await pianino.notaSi.click();
  await pianino.notaDoRe.click();
  await pianino.notaRe.click();
  await pianino.notaMi.click();
  await pianino.notaFaSol.click();
  await pianino.notaRe.click();
  await pianino.notaFaSol.click();
  await pianino.notaFa.click();
  await pianino.notaRe.click();
  await pianino.notaFa.click();
  await pianino.notaMi.click();
  await pianino.notaDo.click();
  await pianino.notaMi.click();
  await pianino.notaSi.click();
  await pianino.notaDoRe.click();
  await pianino.notaRe.click();
  await pianino.notaMi.click();
  await pianino.notaFaSol.click();
  await pianino.notaRe.click();
  await pianino.notaFaSol.click();
  await pianino.notaSi1.click();
  await pianino.notaLa.click();
  await pianino.notaFaSol.click();
  await pianino.notaRe.click();
  await pianino.notaFaSol.click();
  await pianino.notaLa.click();
});
