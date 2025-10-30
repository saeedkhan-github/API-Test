import { da } from "@faker-js/faker";
import { APIRequestContext } from "@playwright/test"
import {expect } from  '@playwright/test';
export class RequestHandler {
    private request: APIRequestContext;
    private baseUrl: string;
    private defaultBaseUrl:string;
    private apiPath: string='';
    private queryParams: object={};
    private apiHeaders: Record<string,string>={}  ;
    private apiBody: object={};

    constructor(request: APIRequestContext, apiBaseUrl: string){
        this.request = request;
        this.defaultBaseUrl = apiBaseUrl;  
    }

    url(url:string){
        this.baseUrl = url;
        return this
    }

    path(path:string){
        this.apiPath= path;
        return this;
    }

    params(params:object){
        this.queryParams= params;
        return this;
    }
    headers(headers:Record<string,string>){
        this.apiHeaders= headers;
        return this;
    }
    body(body: object){
        this.apiBody= body;
        return this;
    }

    async getRequest(statusCode:number){
        const url = this.getUrl();
        const response = await this.request.get(url,{
            headers: this.apiHeaders,
        });
        const responseJSON= await response.json();
        return responseJSON;

    }

     async postRequest(statusCode:number){
        const url = this.getUrl();
        const response = await this.request.post(url,{
            headers: this.apiHeaders,
            data: this.apiBody
        });
        const responseJSON= await response.json();
        return responseJSON;

    }
     async putRequest(statusCode:number){
        const url = this.getUrl();
        const response = await this.request.put(url,{
            headers: this.apiHeaders,
            data: this.apiBody
        });
        const responseJSON= await response.json();
        return responseJSON;

    }
     async deleteRequest(statusCode:number){
        const url = this.getUrl();
        const response = await this.request.get(url,{
            headers: this.apiHeaders,
        });
        expect(response.status()).toBe(statusCode);

    }
    private getUrl(){
        const url = new URL(`${this.baseUrl ?? this.defaultBaseUrl}${this.apiPath}`);
        Object.entries(this.queryParams).forEach(([key, value]) => {
            url.searchParams.append(key, String(value));
        });
      return url.toString();
    }
}