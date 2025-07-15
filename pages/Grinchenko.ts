import { expect, type Locator, type Page } from '@playwright/test';

export class Grinpage {
  readonly page: Page;
  readonly studentBtn: Locator;
  readonly StudparBtn: Locator;
  readonly StatyStunentom: Locator;
  readonly logoBtn: Locator
  readonly PrahnemoDoskonalosti: Locator

  constructor(page: Page) {
    this.page = page;
    this.studentBtn = page.locator('//img[@alt="Студентам"]');
    this.StudparBtn = page.locator('//li[@class="item-528 deeper parent"][.//text()[contains(., "Склад Студентського парламенту")]]');
    this.StatyStunentom = page.locator('//div[@class="col-lg-3 col-md-3 col-sm-6 col-xs-12 "][.//text()[contains(., " Стати студентом")]]');
    this.logoBtn = page.locator('//div[@id="tz-logo-area"]');
    this.PrahnemoDoskonalosti = page.locator('//div[@style="padding-left: 0px; padding-right: 0px;"][.//text()[contains(., "Прагнемо досконалості")]]');

  }

  async goto() {
    await this.page.goto('https://kubg.edu.ua/');
  }

}