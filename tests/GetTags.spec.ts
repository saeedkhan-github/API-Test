import { test, expect } from '@playwright/test';
import exp from 'constants';

test('has title', async ({ request }) => {
 const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
 const data = await response.json()

 expect(response.status()).toEqual(200);
 expect(data.tags[0]).toBe('Test');
 console.log(data);


});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
