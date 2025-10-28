export class RequestHandler{
    private baseUrl:string;
    private apiPath: string;
    private queryParams: object={};
    private apiHeader: object={};
    private apiBody: object={};

    url(url:string){
        this.baseUrl=url;
        return this;
    }

    path(path:string){
        this.apiPath=path;
        return this;
    }   
    params(params:object){
        this.queryParams=params;
        return this;
    }   
    headers(headers:object){
        this.apiHeader=headers;
        return this;
    }
    body(body:object){
        this.apiBody=body;
        return this;
    }   
}