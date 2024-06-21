import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit{
  archiveList!:any
  constructor(private notes:NotesService){}

  ngOnInit(): void {
    this.OnNotesCreate();
  }

  OnNotesCreate(){
   
    this.notes.displayNotes().subscribe((res:any) => {
      this.archiveList=res.data
      this.archiveList=this.archiveList.filter((object:any)=>{
        return object.isArchive==true && object.isTrash==false;
      })
      console.log(this.archiveList)    
    })
  }

  recievedRefreshEventForRestoreArchive($event: any){
    console.log($event)
    this.OnNotesCreate();
  }
}
