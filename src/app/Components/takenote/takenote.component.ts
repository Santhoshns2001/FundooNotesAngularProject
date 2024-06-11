import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrl: './takenote.component.scss'
})
export class TakenoteComponent implements OnInit{
  CreateNotesForm!:FormGroup;
  constructor (private notes:NotesService,private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.CreateNotesForm=this.formbuilder.group({
      title:[''],
      description:['']
    })

  }
  OnNotesCreate(){
    let data= {
      title:this.CreateNotesForm.value.title,
      description:this.CreateNotesForm.value.description
    }
    this.notes.createNotes(data).subscribe((res:any) => {
      console.log(res)
    })
  }
 


}
