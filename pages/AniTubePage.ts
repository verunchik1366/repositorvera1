import { Page, Locator, expect } from '@playwright/test';

export class AniTubePage {
  readonly page: Page;

  readonly genreMenu: Locator;
  readonly antiUtopiaItem: Locator;
  readonly registerLink: Locator;
  readonly acceptCookiesButton: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly registerButton: Locator;
  readonly passwordMismatchError: Locator;

  constructor(page: Page) {
    this.page = page;

    this.genreMenu = page.getByText('Аніме за жанром');
    this.antiUtopiaItem = page.getByRole('listitem').filter({ hasText: 'Антиутопія' });
    this.registerLink = page.getByRole('link', { name: 'Реєстрація на сайті' });
    this.acceptCookiesButton = page.getByRole('button', { name: 'Приймаю', exact: true });
    this.usernameField = page.locator('#name');
    this.passwordField = page.locator('input[name="password1"]');
    this.registerButton = page.getByRole('button', { name: 'Зареєструватися' });
    this.passwordMismatchError = page.getByText('Обидва введених паролі мають бути ідентичні!');
  }

  async open() {
    await this.page.goto('https://anitube.in.ua/');
    await expect(this.page).toHaveTitle(/AniTube/);
  }

  async openGenreAndSelectAntiUtopia() {
    await this.genreMenu.click();
    await this.antiUtopiaItem.click();
  }

  async goToRegistrationAndAcceptCookies() {
    await this.registerLink.click();
    await this.acceptCookiesButton.click();
  }

  async fillRegistrationForm(username: string, password: string) {
    await this.usernameField.click();
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.registerButton.click();
  }

  async expectPasswordErrorVisible() {
    await expect(this.passwordMismatchError).toBeVisible();
  }
}
