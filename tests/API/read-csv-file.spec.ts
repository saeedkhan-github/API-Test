import { expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

 const pat= path.resolve(`__dirname ../../fixtures/Data-file.csv`);
 const data = parse(fs.readFileSync(pat), {
    columns: true,
    skip_empty_lines: true,
 }) as any[];

 // Validate data
if (!data || data.length === 0) {
    throw new Error('CSV file is empty or invalid');
}
  for (const record of data) {
test("Login with Username: "+ record.username, async ({ page}) => {

   
        await page.goto('https://www.saucedemo.com/');
       await page.getByRole('textbox', { name: /Username/i }).fill(record.username)
       await page.getByRole('textbox', { name: /Password/i }).fill(record.password);
    
     await page.locator('#login-button').click();
     await expect(page.locator('h3')).toHaveText('Epic sadface: Username and password do not match any user in this service');

    page.close();

});
  }

