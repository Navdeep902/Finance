import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EMICardService{

    constructor(private getHttp:HttpClient){
        
    }

    public GetEMICard(id:number){
        return this.getHttp.get("http://localhost:49755/api/EMICards/"+id);
    }

    public GetCardTransactions(username:string){
        return this.getHttp.get("http://localhost:49755/api/CardTransactions?username="+username);
    }
}