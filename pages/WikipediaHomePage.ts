import { expect, type Locator, type Page } from '@playwright/test';

export class WikiHomePage {
  readonly page: Page;
  readonly wikipediaSearchInput: Locator;
  readonly searchBtn: Locator;
  readonly emblemOfParisImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.wikipediaSearchInput = page.getByRole('searchbox', { name: 'Пошук у Вікіпедії' })
    this.searchBtn = page.getByRole('button', { name: 'Знайти' })
    this.emblemOfParisImage = page.getByRole('link', { name: 'Герб Парижа' });
  }

  async goto() {
    await this.page.goto('https://uk.wikipedia.org/');
  }

}