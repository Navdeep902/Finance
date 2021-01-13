import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

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

    public GetCreditDetails(cardNumber:number){
        return this.getHttp.get("http://localhost:49755/api/CardTransactions?cardNumber="+cardNumber);
    }

    public GetUserProducts(username:string){
        return this.getHttp.get("http://localhost:49755/api/UserProducts?username="+username);
    }

    public PostTransactions(t:Transaction){
        return this.getHttp.post("http://localhost:49755/api/Transactions", t);
    }

    public GetLastTransactionDate(username:string, productId:number){
        return this.getHttp.get("http://localhost:49755/api/UserProducts?username="+username+"&productId="+productId);
    }

    public GetUserProductWithId(username:string, productId:number){
        return this.getHttp.get("http://localhost:49755/api/Products?username="+username+"&productId="+productId);
    }

    public DeleteProductFromCart(id:number, productId:number){
        return this.getHttp.delete("http://localhost:49755/api/Carts?id="+id+"&productId="+productId);
    }
    
}