import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(sessionStorage.getItem('adminUsername')){
      return true;  
    }else{
      alert('Please login to access requested page');
      return false;
    }
  }
  
}
