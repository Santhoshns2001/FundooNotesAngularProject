import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrl: './updatenotes.component.scss'
})
export class UpdatenotesComponent  implements OnInit{

  title:any;
  description:any;
  id:any;

constructor(
  @Inject(MAT_DIALOG_DATA)public data:any,
  public dailogbox:MatDialogRef<UpdatenotesComponent>,
  private notes:NotesService) {
    this.title=data.title,
    this.description=data.description,
    this.id=data.notesId
}
  ngOnInit(): void {
  }

  closeDailog(){
    let reqData={
      title:this.title,
      description:this.description,
    }
    this.notes.updateNotes(reqData,this.id).subscribe((response:any)=>{
      console.log(response);
      this.dailogbox.close()
    });
  }


}
