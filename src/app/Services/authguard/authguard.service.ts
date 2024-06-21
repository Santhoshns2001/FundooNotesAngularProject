import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }


  getToken(){
    return !! localStorage.getItem("token");
    //return !! sessionStorage.getItem("token");
  }
}
