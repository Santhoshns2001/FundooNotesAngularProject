import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos:{title:string,isEditing:boolean}[]=[];

  
  addTodo(input:HTMLInputElement)
  {
   const newTodo=input.value;
   if(newTodo.length===0){
    return;
   }
   this.todos.push({title:newTodo,isEditing:false});
   input.value=''
  }
  

  editTodo(todo:any)
  {
todo.isEditing=true;
  }

  saveTodo(todo:{
title:string,
  isEditing:boolean},
  input:HTMLInputElement
  ){
    todo.title=input.value;
    todo.isEditing=false;
    }


  deleteTodo(title:string){
    this.todos=this.todos.filter(todo=>todo.title!==title)
  }

}
