import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any;
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }

  createNotes(data:any){
    let header={
      headers:new HttpHeaders({
         'content-type':'application/json',
         'authorization':'Bearer '+this.token
      })
     
    }
    return this.httpService.postMethodCreateNotes('https://localhost:5001/api/Notes/CreateNotes',data,true,header);
  }

  displayNotes(){
      let head={
        headers: new HttpHeaders({
          'content-type':'application/json',
          'Authorization':'Bearer '+this.token
        })
      }
      return this.httpService.getService(`https://localhost:5001/api/Notes/GetUserNotesWithUserInfo`,true,head);
    

  }



}
