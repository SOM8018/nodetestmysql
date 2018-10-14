import { Component } from "@angular/core";
import { fetchService } from "../../services/fetch.service";
import { insertService } from "../../services/insert.service";
import { updateService } from "../../services/update.service";
import { deleteService } from "../../services/delete.service";
import { HttpErrorResponse }  from "@angular/common/http";
@Component({
    selector: "mysql",
    templateUrl: "./mysql.component.html"
})
export class mysqlComponent{
    private products:any;
    private insertStatus:any;
    private updateStatus:any;
    private deleteStatus:any;
    constructor(private _service1:fetchService,
                private _service2:insertService,
                private _service3:updateService,
                private _service4:deleteService){}
    ngOnInit(){
        this._service1.getProducts().subscribe(res=>{
            this.products=res;
        },this._errorCallBack);
    }            

public insert(obj:any):any{
    this._service2.insertProduct(obj).subscribe(res=>{
        this.insertStatus=res;
        if(res.insert=="success"){
            this.products.push(obj);
        }
        else{
            this.insertStatus=res;
        }
    },this._errorCallBack);
};
public update(obj:any):any{
    this._service3.updateProduct(obj).subscribe(res=>{
        this.updateStatus=res;
    },this._errorCallBack);
};
public remove(obj:any):any{
    this._service4.deleteProduct(obj).subscribe(res=>{
        this.deleteStatus=res;
    },this._errorCallBack)
};
public _errorCallBack=(err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
        console.log("Client Side Error");
    }
    else{
        console.log("Server Side Error");
    };
};
}