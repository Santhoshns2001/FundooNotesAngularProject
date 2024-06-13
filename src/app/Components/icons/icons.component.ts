import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit {
  NotesForm!: FormGroup;

  constructor(private notes: NotesService) { }

  @Input() notesObject: any;
  ngOnInit(): void {

  }


  onArchive() {
    let reqData = {
      notesId: this.notesObject.notesId
    }
    console.log(reqData)
    this.notes.archiveNotes(reqData).subscribe((result: any) => { console.log(result) })
  }


  onDelete() {
    let reqData = {
      notesId: this.notesObject.notesId
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((result: any) => { console.log(result) })
  }


  colorArray: Array<any> = [

    { code: '#ffffff', name: 'White' },
    { code: '#ff0000', name: 'Red' },
    { code: '#FFC0CB', name: 'Pink' },
    { code: '#008000', name: 'Green' },
    { code: '#FFFF00', name: 'Yellow' },
    { code: '#ff00ff', name: 'Magenta' },
    { code: '#FFA500', name: 'Orange' },
    { code: '#800080', name: 'Purple' },
    { code: '#000000', name: 'Black' },
  ];

  selectColor(colors: any) {
    let reqData = {
      colour: colors.name,
      notesId: this.notesObject.notesId
    }
    this.notes.notesColor(reqData).subscribe((res: any) => {
      console.log(res)
    })

  }

}
