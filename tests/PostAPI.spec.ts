import { test, expect } from '@playwright/test';
import {faker } from '@faker-js/faker';
const apiBaseUrl= process.env.API_BASE_URL;
let token: string = "";

test.describe('POST API Test Suite ',()=>{

    test.beforeAll( async ({ request }) => {
        const response = await request.post(`${apiBaseUrl}/api/users/login`, {
            data: {
                "user": {
                    "email": process.env.USER_EMAIL,
                    "password": process.env.USER_PASSWORD
                }
            }
        });
        const data = await response.json();
        token = `Token ${data.user.token}`;
        process.env.Token = token;
        console.log('Obtained token:', token);
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
            Authorization: process.env.Token as string
        }
        });
        console.log('Create article response status:', response.status());
        expect(response.status()).toEqual(201);

    })



})