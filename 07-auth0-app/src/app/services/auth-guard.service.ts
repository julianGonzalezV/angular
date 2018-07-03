import { Injectable } from '@angular/core';
import {  Router, 
          ActivatedRouteSnapshot, 
          RouterStateSnapshot, 
          CanActivate 
        } from "@angular/router"

import { AuthService } from './auth.service';

        

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { 

  }

  canActivate(nextPage: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.auth.isAuthenticated();
  }


}
