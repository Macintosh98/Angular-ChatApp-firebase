import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class TodoService 
{ 
  todoList : any;

  constructor(private firebase: AngularFireDatabase) {    
  }
 
  form = new FormGroup({
    $key: new FormControl(null),
    Task: new FormControl('')
    
  });

  getTodo() 
  {
    //this.todoList = this.firebase.list('task3');
    return this.todoList.snapshotChanges();
  }

  insertTodo(todo) 
  {
    this.todoList.push({
     Task: todo.Task
    });
  }

  populateForm(todo) 
  {
    this.form.setValue(todo);
  }

  deleteTodo($key: string) 
  {
    this.todoList.remove($key);
  }
}
