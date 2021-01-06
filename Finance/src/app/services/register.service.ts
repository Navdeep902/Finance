import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Register} from "../models/register.model";

@Injectable()
export class RegisterService{

    constructor(private httpClient:HttpClient){
    }

    public LoginCheckRegisterApi(register:Register){
        return this.httpClient.post("http://localhost:49755/api/Register", register);
    }
}