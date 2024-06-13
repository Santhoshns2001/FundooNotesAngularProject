import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrl: './get-all-notes.component.scss'
})
export class GetAllNotesComponent implements OnInit{

  notesArray:any;

  constructor(private notes:NotesService){}
  ngOnInit(): void {
    this.OnNotesCreate();
  }
  OnNotesCreate(){
    this.notes.displayNotes().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log(this.notesArray);
      this.notesArray.reverse();
    })
  }

  createRefreshEvent($event:any){
  this.OnNotesCreate()
  }

  createUpdateRefreshEvent($event:any){
    this.OnNotesCreate()
  }
  

}
