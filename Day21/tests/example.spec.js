// @ts-check
import { test, expect } from '@playwright/test';

test.describe('jio mart test', () => {
  test.use({ storageState: 'auth.json' });
  test.skip('search for fruits', async ({ page }) => {
    await page.goto('https://www.jiomart.com/sections/low-price-mumbai');

    // Click on the search input and type "fruits"
    const input = page.locator('//*[@id="app"]/div/div[3]/header/div[1]/div/div[2]/div[1]/div/div[2]/input');
    await input.click();
    await input.fill('fruits');
    await input.press('Enter');
    await expect(page.getByText('fruits').first()).toBeVisible();
  });

  test.skip('profile', async ({ page }) => {
    await page.goto('https://www.jiomart.com/profile');

    const profileName = page.getByTestId("JDSText-text").nth(0);
    console.log(await profileName.textContent());
    expect(profileName).toHaveText("Aaryan kumar");
  });
});

const searchData = [
  { searchTerm: 'Playwright', expectedTitle: 'Playwright' },
  { searchTerm: 'Testing', expectedTitle: 'Test' },
  { searchTerm: 'Automation', expectedTitle: 'Automation' },
];

test.describe('paramertized test', () => {
  test.beforeEach(async ({ page }) => await page.goto('https://en.wikipedia.org/wiki/Main_Page'));
  for (const item of searchData) {
    test(`search for ${item.searchTerm}`, async ({ page }) => {
      await page.fill('input[name="search"]', item.searchTerm);
      await page.keyboard.press('Enter');

      await expect(page).toHaveTitle(new RegExp(item.expectedTitle, 'i'));
    })
  }
});

test.describe('soft assertions', () => {
  test.skip('soft', async ({ page }) => {
    await page.goto("https://example.com/");

    // line fail -> go to new line
    await expect.soft(page.locator('h1')).toHaveText('Example Domain1');
    await expect.soft(page.locator('p').first()).toBeVisible();
    console.log("hello");
  });
});

test('polling assertions', async ({ page }) => {
  let counter = 0;

  await expect.poll(async () => {
    counter++;
    return counter;
  }, {
    message: 'Counter did not reach 5',
    timeout: 5000,
  }).toBe(5);
})