import { Page, Locator, expect } from '@playwright/test';

export class MangaPage {
  readonly page: Page;
  readonly catalogLink: Locator;
  readonly yaoiLink: Locator;
  readonly livetaLink: Locator;
  readonly ageConfirmButton: Locator;
  readonly readFromStartButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.catalogLink = page.getByRole('link', { name: 'Каталог' });
    this.yaoiLink = page.getByRole('link', { name: 'Яой' }).nth(1);
    this.livetaLink = page.getByRole('link', { name: 'Лівета' });
    this.ageConfirmButton = page.getByRole('button', { name: 'Мені вже є' });
    this.readFromStartButton = page.getByText('Читати з початку');
  }

  async openHomePage() {
    await this.page.goto('https://manga.in.ua/');
    await expect(this.page).toHaveTitle(/Manga/);
  }

  async navigateToYaoi() {
    await this.catalogLink.click();
    await this.yaoiLink.click();
  }

  async openLiveta() {
    await this.livetaLink.click();
  }

  async confirmAgeIfPrompted() {
    await this.ageConfirmButton.click();
  }

}


