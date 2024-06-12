import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  postMethod(url:string,payload:any,token:boolean=false,httpOptions:any={}){
     return this.http.post(url,payload,token && httpOptions)
  }

   postMethodCreateNotes(url:string,reqData:any,token:boolean=true,httpOptions:any={}){
    return this.http.post(url,reqData,token &&  httpOptions)
  }

  getService(url:string,token:boolean=true,httpOptions:any={}){
    return this.http.get(url,token &&  httpOptions)
  }

  putServices(url:string,reqData:any,token:boolean=true,httpOptions:any={}){
    return this.http.put(url,reqData,token &&  httpOptions)
  }

  

}
