import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrl: './displaynotes.component.scss'
})
export class DisplaynotesComponent implements OnInit {

  constructor(private dialog: MatDialog,private data:DataService){}
  message:any;
  filterNote:any;
@Input() notesList:any;
@Output() updateAutoRefresh= new EventEmitter<string>();

ngOnInit(): void {
  this.data.incomingData.subscribe((response)=>{
    console.log("Search in process",response)
    this.filterNote=response;
  })
}
 
editNoteDailog(notes:any){
 const dailogbox=this.dialog.open(UpdatenotesComponent,{
  width:'40%',
  height:'auto',
  data:notes
 })
 dailogbox.afterClosed().subscribe(result =>{
  console.log(result);
  this.updateAutoRefresh.emit(result);
 })
}

recievedRefreshIconEvent($event: any){
  console.log($event);
  this.updateAutoRefresh.emit($event);
}









}

