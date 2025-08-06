import { type Locator, type Page } from '@playwright/test';

export class Pianino {
  readonly page: Page;
  readonly notaSi: Locator;
  readonly notaDoRe: Locator;
  readonly notaRe: Locator;
  readonly notaMi: Locator;
  readonly notaFaSol: Locator;
  readonly notaFa: Locator;
  readonly notaDo: Locator;
  readonly notaSi1: Locator;
  readonly notaLa: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notaSi = page.locator('//span[@data-key="82"]');
    this.notaDoRe = page.locator('//span[@data-key="54"]');
    this.notaRe = page.locator('//span[@data-key="89"]');
    this.notaMi = page.locator('//span[@data-key="85"]');
    this.notaFaSol = page.locator('//span[@data-key="57"]');
    this.notaFa = page.locator('//span[@data-key="72"]');
    this.notaDo = page.locator('//span[@data-key="84"]');
    this.notaSi1 = page.locator('//span[@data-key="219"]');
    this.notaLa = page.locator('//span[@data-key="80"]');
  }

  async goto() {
    await this.page.goto('https://www.musicca.com/ru/pianino' );
}
async clickNoteWithDelay(locator: Locator, delayMs = 1000) {
    await locator.click();
    await this.page.waitForTimeout(delayMs); // Затримка після кліку
  }
}