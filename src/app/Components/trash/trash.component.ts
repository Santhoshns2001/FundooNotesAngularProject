import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit {

constructor(private notes :NotesService) {}
trashList:any

  ngOnInit(): void {
   this.OnNotesCreate()
  }

  OnNotesCreate(){
    
    this.notes.displayNotes().subscribe((res:any) => {
      console.log(res)
      this.trashList=res.data;
      this.trashList=this.trashList.filter((object:any)=>{
        return object.isTrash==true;
      })
    
    })
  }

  restore(notes:any){
    let reqData={
      notesId:notes.notesId
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((res:any)=>{
      console.log(res)
      this.OnNotesCreate();
    })
  }


}
