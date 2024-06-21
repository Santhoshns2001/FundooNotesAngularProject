import { Injectable } from '@angular/core';
import {  CanActivate,Router } from '@angular/router';
import { AuthguardService } from './Services/authguard/authguard.service';




// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate{
  constructor(private Authguardservice:AuthguardService,private router:Router){}
  canActivate():boolean {
    if(!this.Authguardservice.getToken()){
      this.router.navigateByUrl("/login")
    }
    return this.Authguardservice.getToken();
  }
  
}






