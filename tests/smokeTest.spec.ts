import { test } from '../utils/fixtures';
import { RequestHandler } from '../utils/request-handler';

test('Smoke Test',async({api})=>{

    // const api= new RequestHandler();

    const response = await api.url('https://conduit-api.bondaracademy.com/api')
    .path('/articles')
    .params({limit:10,offset:0})
    .headers({
        Authorization: `${process.env.Token}`
    })
    // .body({user:{email:'saeedkhan.github+2@gmail.com',password:'Saeed123@'}})
 
})