// import { test, expect } from '@playwright/test';

// test('animetube test', async ({ page }) => {
//   await page.goto('https://anitube.in.ua/');

//   await expect(page).toHaveTitle(/AniTube/);

//   await page.waitForTimeout(1000);

//   await page.getByText('Аніме за жанром').click()

//   await page.waitForTimeout(1000);

//   await page.getByRole('listitem').filter({ hasText: 'Антиутопія' }).click()

//   await page.waitForTimeout(1000);

//   await page.getByRole('link', { name: 'Реєстрація на сайті' }).click()

//   await page.waitForTimeout(1000)  

//   await page.getByRole('button', { name: 'Приймаю', exact: true }).click()

//   await page.waitForTimeout(1000)

//   await page.locator('#name').click()

//   await page.waitForTimeout(1000) 

//   await page.locator('#name').fill('fake_user') // філ вводить у поле параметри

//   await page.waitForTimeout(1000);
  
//   await page.locator('input[name="password1"]').fill('password1234')

//   await page.waitForTimeout(1000);

//   await page.getByRole('button', { name: 'Зареєструватися' }).click()

//   await page.waitForTimeout(1000);
  
//   await expect(page.getByText('Обидва введених паролі мають бути ідентичні!')).toBeVisible(); //перевіряє видимість 
// }); 

////////////////////////////////////////////////////////////////////
// test('animetube test', async ({ page }) => {
//   await page.goto('https://manga.in.ua/') ;

//   await expect(page).toHaveTitle(/Manga/);

//   await page.waitForTimeout(1000);

//   await page.getByRole('link', { name: 'Каталог' }).click();

//   await page.waitForTimeout(1000);

//   await page.getByRole('link', { name: 'Яой' }).nth(1).click();
  
//   await page.waitForTimeout(1000);

//   await page.getByRole('link', { name: 'Лівета' }).click();

//   await page.waitForTimeout(1000);

//   await page.getByRole('button', { name: 'Мені вже є' }).click();

//   await page.waitForTimeout(1000);

//   await page.getByText('Читати з початку').click();

//   await page.waitForTimeout(1000);

//   await page.getByRole('link', { name: 'Читати розділ' }).click();

//   await page.waitForTimeout(1000);

//   await expect(page.locator('.xfieldimagegallery > li').first()).toBeVisible();

// })

////////////////////////////////////////////////////////////

// test('Horror test', async ({ page }) => {
//   await page.goto('https://uafix.net/films/punkt-priznachennja-6//') ;

//   await expect(page).toHaveTitle(/Пункт призначення 6/)

//   await page.waitForTimeout(1000);
 
//   await page.getByRole('textbox', { name: 'Ваше ім\'я' }).fill('fake_user');

//   await page.waitForTimeout(1000);

//   await page.getByRole('textbox', { name: 'Ваш e-mail (не обов\'язково)' }).fill('fake_email');
  
//   await page.waitForTimeout(1000);

//   await page.locator('#comments').fill('Вєра вводить коментар, дякую, фільм я не дивилась');

//   await page.waitForTimeout(1000);

//   await page.getByRole('button', { name: 'Відправити' }).click();

//   await page.waitForTimeout(1000);

//   // await page.
// });


////////////////////////////////////////////////////////////

// test('temu test', async ({ page }) => {
//   await page.goto('https://www.temu.com/');

//   await expect(page).toHaveTitle(/Temu/);

//   await page.waitForTimeout(1000);

//   await page.getByRole('textbox', { name: 'Введіть email' }).fill('sugaruto+1.gmail.com');

//   await page.waitForTimeout(1000);

//   await page.getByRole('button', { name: 'Продовжити' }).click();

//   await page.waitForTimeout(1000);

//   await expect(page.getByText('Система зайнята, повторіть спробу пізніше')).toBeVisible();

//   await page.waitForTimeout(1000);

//   await page.getByRole('button', { name: 'Не вдається ввійти в обліковий запис?' }).click();

//   await page.waitForTimeout(1000);

//   await page.getByRole('button', { name: 'Скинути пароль' }).click();

//   await page.waitForTimeout(1000);

//   await page.getByRole('button', { name: 'Надіслати' }).click();

//   await page.waitForTimeout(1000);

//   await expect(page.getByText('Введіть дійсну адресу електронної пошти')).toBeVisible();

// })

///////////////////////////////////////////////////////////////

// test('pulsar', async ({ page }) => {
//   await page.goto('https://www.pulsar.ua/ua/');

//   await expect(page).toHaveTitle(/Pulsar/);

//   await page.waitForTimeout(1000);

//   await page.getByText('Японська їжа та продукти').click();

//   await page.waitForTimeout(1000);

//   await page.getByRole('link', { name: 'Дивитися всі' }).click();

//   await page.waitForTimeout(1000);

//   await page.locator('#category-top-block').getByText('Японський Шоколад').click();

//   await page.waitForTimeout(1000);

//   await expect(page.locator('.product_label > .jspeed-img-lazyloaded').first()).toBeVisible();

//   await page.waitForTimeout(1000);

//   await page.getByRole('link', { name: 'Товари', exact: true }).click();

//   await page.waitForTimeout(1000);

//   await page.locator('#category-top-block').getByText('Аніме сумки').click();

//   await page.waitForTimeout(1000);

//   await page.locator('.btn').first().click();
  
//   await page.waitForTimeout(1000);

//   await expect(page.locator('iframe[name="fancybox-frame1751632443672"]').contentFrame().getByText('Кошик Шопер «ДандаДан (')).toBeVisible();

// });
///////////////////////////////////////////////////////////////////////

// import { test, expect, } from '@playwright/test';
// test('888 dragons', async ({ page }) => {
//   await page.goto('https://www.pragmaticplay.com/en/games/888-dragons-slot/');

//   await expect(page).toHaveTitle(/888 Dragons/);

//   await page.getByRole('link', { name: 'Yes, I am 18 years or older' }).click();

//   await page.getByRole('button', { name: 'Accept All' }).click();

//   await page.waitForTimeout(3000);

// // 3. Дочекатися iframe з грою
//   const iframeElement = await page.waitForSelector('#iframe');
//   const frame = await iframeElement.contentFrame();
//   if (!frame) throw new Error('❌ iframe не знайдено');

//   // 4. Дочекатися canvas всередині гри
//   const canvas = await frame.waitForSelector('canvas');
//   const canvasBox = await canvas.boundingBox();
//   const iframeBox = await iframeElement.boundingBox();

//   if (!canvasBox || !iframeBox) throw new Error('❌ Не вдалося отримати координати canvas або iframe');

//   // 5. Розрахунок координат кнопки "Spin" (внизу праворуч canvas)
//   const spinX = iframeBox.x + canvasBox.x + canvasBox.width - 20;
//   const spinY = iframeBox.y + canvasBox.y + canvasBox.height - 20;

//   // 6. Зробити 5 кліків із затримкою
//   for (let i = 1; i <= 5; i++) {
//     console.log(`▶️ Spin #${i}`);
//     await page.mouse.click(spinX, spinY, { delay: 300 });
//     await page.waitForTimeout(3000); // затримка між спінами
//   }

//   console.log('✅ Успішно виконано 5 спінів!');
// });

// tests/example.spec.ts

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
