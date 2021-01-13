import {​​​​​HttpClient}​​​​​ from '@angular/common/http';
import {​​​​​ Injectable }​​​​​ from '@angular/core';
import {​​​​​ Register }​​​​​ from '../models/register.model';

@Injectable()
export class AdminServiceService
{​​​​​
    constructor(private getHttp:HttpClient,private putHttp:HttpClient, private postHttp:HttpClient)
    {​​​​​
    }​​​​​
    public getAllUsersFromApi()
    {​​​​​
        return this.getHttp.get("http://localhost:49755/api/RegisterBanks");
    }​​​​​
    public deleteUser(username:string){​​​​​
        return this.putHttp.delete("http://localhost:49755/api/RegisterBanks/"+username);
    }​​​​​
    public activateUser(username:Register)
    {​​​​​
        return this.getHttp.post("http://localhost:49755/api/RegisterBanks",username);
    }​​​​​

    public updatePassword(id:string, registerBank:Register){
        return this.putHttp.put("http://localhost:49755/api/RegisterBanks/"+id,registerBank);
    }

    public Getcheckverify(username: string){
        return this.getHttp.get("http://localhost:49755/api/Verify?username="+username);
    }
}​​​​​   