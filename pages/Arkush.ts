import { expect, type Locator, type Page } from '@playwright/test';

export class ArKush {
  readonly page: Page;
  readonly searchInputik: Locator;
  readonly tWory: Locator;
  readonly readBtn: Locator
  readonly page1: Locator
  readonly nextPage: Locator
  readonly page2: Locator
  readonly page3: Locator
  readonly page4: Locator
  readonly page5: Locator
  readonly lastPage: Locator


  constructor(page: Page) {
    this.page = page;
    this.searchInputik = page.locator('//input[@name="s"]');
    this.tWory = page.locator('//article[contains(@class, "book") and .//text()[contains(., "Нічний лабіринт")]]');
    this.readBtn = page.locator('//a[@class="button read"]');
    this.page1 = page.locator('//div[@id="book-text"]');
    this.nextPage = page.locator('//a[@class="next"]');
    this.page2 = page.locator('//div[@id="book-text"]');
    this.nextPage = page.locator('//a[@class="next"]');
    this.page3 = page.locator('//div[@id="book-text"]');
    this.nextPage = page.locator('//a[@class="next"]');
    this.page4 = page.locator('//div[@id="book-text"]');
    this.nextPage = page.locator('//a[@class="next"]');
    this.page5 = page.locator('//div[@id="book-text"]');
    this.nextPage = page.locator('//a[@class="next"]');
    this.lastPage = page.locator('//div[@id="book-text"]');


  }

  async goto () {
    await this.page.goto('https://arkush.net')
    
  }
  async search(query: string) {
   await this.searchInputik.fill(query);
   await this.searchInputik.press('Enter');
}
}