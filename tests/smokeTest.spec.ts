import {test, expect} from '@playwright/test';
import { RequestHandler } from '../utils/request-handler';
test('Smoke Test - Basic GET Request', async ({request}) => {
   const api= new RequestHandler()          
    api.url('https://conduit-api.bondaracademy.com/api/tags')
    .path('/articles')
    .params({limit:10,offset:0})
    .headers({Authorization:process.env.Token as string})
    .body({ user: { email: 'saeedkhan.github+2@gmail.com', password: 'Saeed123@' } });

    let res = await api.json();
})