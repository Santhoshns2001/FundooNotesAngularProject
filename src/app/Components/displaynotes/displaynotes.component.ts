import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrl: './displaynotes.component.scss'
})
export class DisplaynotesComponent implements OnInit {

  constructor(private dialog: MatDialog){}

@Input() notesList:any;
@Output() updateAutoRefresh= new EventEmitter<string>();

ngOnInit(): void {
  
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







}

