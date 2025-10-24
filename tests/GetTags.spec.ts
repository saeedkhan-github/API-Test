import { test, expect } from '@playwright/test';
import exp from 'constants';

test('has title', async ({ request }) => {
 const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
 const data = await response.json()

 expect(response.status()).toEqual(200);
 expect(data.tags[0]).toBe('Test');
 console.log(data);


});

