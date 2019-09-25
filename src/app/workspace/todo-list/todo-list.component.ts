import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit 
{ 
  constructor(private todoService: TodoService) 
  {}
  
  todoArray = [];
  showDeletedMessage: boolean;
 
  ngOnInit() 
  {
    this.todoService.getTodo().subscribe(
      list => {
        this.todoArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) 
  {
    if (confirm('To do : Completed ?')) 
    {
      this.todoService.deleteTodo($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  } 
}