import { expect, type Locator, type Page } from '@playwright/test';

export class Mon_Ua {
  readonly page: Page;
  readonly navchalniProgramyBtn: Locator;
  readonly typoviOsvProg: Locator;
  readonly zakonodavstvo: Locator

  constructor(page: Page) {
    this.page = page;
    this.navchalniProgramyBtn = page.locator('//a[@target="_blank"][.//text()[contains(., "Навчальні програми")]]');
    this.typoviOsvProg = page.locator('//div[@class="col-lg-6"][.//text()[contains(., "Типові освітні програми")]]');
    this.zakonodavstvo = page.locator('//div[@class="menu-pc-container"][.//text()[contains(., "Законодавство")]]');
  }

  async goto() {
    await this.page.goto('https://mon.gov.ua/');
  }
  async openNavchalniProgramyInNewTab(): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.navchalniProgramyBtn.click()
    ]);
    await newPage.waitForLoadState('load');
    return newPage;
  }

  async goToTypoviOsvitniProhramy() {
    await this.typoviOsvProg.waitFor({ state: 'visible' });
    await this.typoviOsvProg.scrollIntoViewIfNeeded();
    await this.typoviOsvProg.click();
  }

  async goToZakonodavstvo() {
    await this.zakonodavstvo.waitFor({ state: 'visible'});
    await this.zakonodavstvo.click()
  }

}