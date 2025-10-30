import { before, describe } from 'node:test';
import {test } from '../utils/fixtures';
import {faker } from '@faker-js/faker';

test.describe('API Test Suite ',()=>{

    test.beforeAll( async ({api}) => {
    const response = await api.
    path('users/login')
    .body({
        "user": {
            "email": process.env.USER_EMAIL,
            "password": process.env.USER_PASSWORD
        }
    }).postRequest(200);
    const token = `Token ${response.user.token}`;
    process.env.Token = token;

    });
    test('Get Articles ', async ({api}) => {        
    const response = await  api
        .path('/articles')
        .params({limit:10,offset:0})
        .getRequest(200);

        // console.log('Response from /articles endpoint:', response);
    });

    test('Create Article ', async ({api}) => {        
        const articlePayload = {
            article: {
                title: faker.lorem.sentence(),
                description: faker.lorem.paragraph(),
                body: faker.lorem.paragraphs(2),
                tagList: faker.helpers.arrayElements(['qa', 'testing', 'playwright']),
            }
        };

    const response = await  api
        .path('/articles')
        .headers({'Authorization': `${process.env.Token}`})
        .body(articlePayload)
        .postRequest(201);

        // console.log('Response from creating article:', response);
    });





})
