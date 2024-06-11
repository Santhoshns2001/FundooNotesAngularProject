import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  login(data:any)
  {
    let header= {
       headers: new HttpHeaders({
      'Content-type':'application/json',
    })
  }
    return this.httpService.postMethod('https://localhost:5001/api/User/login?Email='+data.Email+'&password='+data.password,{},false,header);
  }

register(reqData:any){
  let header={
    headers:new HttpHeaders({
      'content-type':'application/json',
    })
  }
  return  this.httpService.postMethod('https://localhost:5001/api/User/Register',reqData,false,header);
}

}
