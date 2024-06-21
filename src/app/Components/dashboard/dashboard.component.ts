import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor( private route: Router, private data: DataService) {}
 
  archiveNotes(){
    this.route.navigateByUrl('/dashboard/archive');
  }
  trashNotes(){
    this.route.navigateByUrl('/dashboard/trash')
  }


  search(event:any){
    console.log(event.target.value)
    this.data.outGoingData(event.target.value)
  }

}
