// @ts-check
import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test.describe('jio mart test', () => {
  test.use({ storageState: 'auth.json' });
  test('search for fruits', async ({ page }) => {
    await page.goto('https://www.jiomart.com/sections/low-price-mumbai');

    // Click on the search input and type "fruits"
    const input = page.locator('//*[@id="app"]/div/div[3]/header/div[1]/div/div[2]/div[1]/div/div[2]/input');
    await input.click();
    await input.fill('fruits');
    await input.press('Enter');
    await expect(page.getByText('fruits').first()).toBeVisible();
  });

  test('profile', async ({ page }) => {
    await page.goto('https://www.jiomart.com/profile');

    const profileName = page.getByTestId("JDSText-text").nth(0);
    console.log(await profileName.textContent());
    await expect(profileName).toHaveText("Mahalaxmi");
  });
});


// test('test', async ({ page }) => {
//   await page.goto('https://www.jiomart.com/sections/low-price-mumbai');
//   await page.getByRole('button', { name: 'Enable Location' }).click();
//   await page.goto('https://www.jiomart.com/sections/low-price-telangana');
//   await page.getByRole('link', { name: 'user icon' }).click();
//   await page.getByTestId('JDSInput-input').fill('6303019248');
//   await page.getByTestId('JDSInput-input').press('Enter');
//   await page.getByRole('textbox', { name: '1' }).click();
//   await page.getByRole('textbox', { name: '1' }).fill('1');
//   await page.getByRole('textbox', { name: '2' }).fill('7');
//   await page.getByRole('textbox', { name: '3' }).fill('8');
//   await page.getByRole('textbox', { name: '4' }).fill('1');
//   await page.getByRole('textbox', { name: '5' }).fill('0');
//   await page.getByRole('textbox', { name: '6' }).fill('4');
//   await page.getByTestId('JDSInput-input').fill('Mahalaxmi');
//   await page.getByTestId('JDSInput-input').press('Enter');
//   await page.getByTestId('JDSButton-container').click();
//   await page.goto('https://www.jiomart.com/profile');
// });
