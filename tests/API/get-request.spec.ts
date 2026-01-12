import { expect, test } from '@playwright/test';

test.skip('Get Object List API Call ', async ({ request }) => {

    const response = await request.get(`https://api.restful-api.dev/objects/7`);
    console.log('Get objects response status:', response.status());
    expect(response.status()).toEqual(200);
    console.log(await response.json());

});

test('Post New Object API Call ', async ({ request }) => {
    const newObject = {
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}
    const response = await request.post(`https://api.restful-api.dev/objects`, {
        data: newObject
    }); 
    console.log('Post new object response status:', response.status());
    expect(response.status()).toEqual(200);
    console.log(await response.json());
}   
);      