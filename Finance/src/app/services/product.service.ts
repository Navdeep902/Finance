import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService{

    constructor(private getHttp:HttpClient){
        
    }
    public GetAllProducts(){
        return this.getHttp.get("http://localhost:49755/api/Products");
    }

    public GetProduct(id:number){
        return this.getHttp.get("http://localhost:49755/api/Products/"+id);
    }
}