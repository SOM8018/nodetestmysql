import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class insertService{
    constructor(private _http:HttpClient){}
    public insertProduct(obj:any):any{
        return this._http.post("http://localhost:8080/insert",obj);
    };
};