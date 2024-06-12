import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit{
  NotesForm!:FormGroup;

  constructor(private notes:NotesService){}

  @Input() notesObject:any;
  ngOnInit(): void {
    
  }


  onArchive(){
    let reqData={
      notesId:this.notesObject.notesId
    }
    console.log(reqData)
    this.notes.archiveNotes(reqData).subscribe((result:any )=>{console.log(result)} )
  }


  onDelete(){
    let reqData={
      notesId:this.notesObject.notesId
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((result:any )=>{console.log(result)} )
  }

}
