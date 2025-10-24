import { test, expect } from '@playwright/test';
import {faker } from '@faker-js/faker';
const apiBaseUrl= process.env.API_BASE_URL;
var token:string="Token "
test.describe('POST API Test Suite ',()=>{
    test('login user Get API Token', async ({ request }) => {
        const response = await request.post(`${apiBaseUrl}/api/users/login`, {
            data: {
                "user": {
                    "email": process.env.USER_EMAIL,
                    "password": process.env.USER_PASSWORD
                }
            }
        });
    const data =await response.json();
    token+= data.user.token;
    // console.log(response.status());
    // console.log(token);

    });

    test('Create Article Post API Call ', async ({ request }) => {
         const article = {
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            body: faker.lorem.paragraphs(2),
            tagList: faker.helpers.arrayElements(['qa', 'testing', 'playwright']),
         };
        const response = await request.post(`${apiBaseUrl}/api/articles/`, {
        data: {
            article
        },headers:{
            Authorization:token
        }
        });

        expect(response.status()).toEqual(201);

    })



})
