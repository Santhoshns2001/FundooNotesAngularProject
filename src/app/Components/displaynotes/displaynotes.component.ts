import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrl: './displaynotes.component.scss'
})
export class DisplaynotesComponent implements OnInit {


@Input() notesList:any;

ngOnInit(): void {
  
}







}

