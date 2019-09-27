import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})

export class TodoService 
{ 
  todoList : any;
  projectKey : any;
  path:any

  constructor(private firebase: AngularFireDatabase , private data : DataService) {  

    this.data.currentMessage$.subscribe(message => {
      console.log("got the key")
      this.projectKey = message
      this.path = 'projects/'+this.projectKey+'/ToDoLost'
      this.todoList = this.firebase.list(this.path);    
      console.log("value is been set")
    });
  }
  
  form = new FormGroup({
    $key: new FormControl(null),
    Task: new FormControl('')
    
  });

  getTodo() 
  {
    this.todoList = this.firebase.list(this.path);
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
