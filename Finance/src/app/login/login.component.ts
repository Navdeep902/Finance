import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register.model';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerLogin:Register;
  register:any;
  msg:any;
  constructor(private registerService:RegisterService) {
    this.registerLogin = new Register();
   }

   onLogin(){
     this.registerService.LoginCheckRegisterApi(this.registerLogin).subscribe(
       r=>this.register = r,
       e=>this.msg=e.error.Message);
   }

  ngOnInit(): void {
  }

}
