
import { test, expect, Page, Frame } from '@playwright/test';

export class DragonsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://www.pragmaticplay.com/en/games/888-dragons-slot/');
  }

  async confirmAgeAndAcceptCookies() {
    await this.page.getByRole('link', { name: 'Yes, I am 18 years or older' }).click();
    await this.page.getByRole('button', { name: 'Accept All' }).click();
    await this.page.waitForTimeout(3000);
  }

  async getGameFrame(): Promise<Frame> {
    const iframeElement = await this.page.waitForSelector('#iframe');
    const frame = await iframeElement.contentFrame();
    if (!frame) throw new Error(' iframe не знайдено');
    return frame;
  }

  async getSpinCoordinates(frame: Frame): Promise<{ x: number; y: number }> {
    const iframeElement = await this.page.waitForSelector('#iframe');
    const canvas = await frame.waitForSelector('canvas');
    const canvasBox = await canvas.boundingBox();
    const iframeBox = await iframeElement.boundingBox();

    if (!canvasBox || !iframeBox) {
      throw new Error(' Не вдалося отримати координати canvas або iframe');
    }

    const spinX = iframeBox.x + canvasBox.x + canvasBox.width - 20;
    const spinY = iframeBox.y + canvasBox.y + canvasBox.height - 20;

    return { x: spinX, y: spinY };
  }
}
