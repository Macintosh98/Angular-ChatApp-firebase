import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit 
{
  constructor(public todoService: TodoService) 
  { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.todoService.form.controls;

  ngOnInit() 
  {
  }

  onSubmit() 
  {
    this.submitted = true;
  
    if (this.todoService.form.valid) 
    {
      if (this.todoService.form.get('$key').value == null)
      { 
        console.log(this.todoService.form.value)
        this.todoService.insertTodo(this.todoService.form.value);
      }
     else
     {
        return;
     }
      
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.todoService.form.reset();
      
     
      this.todoService.form.setValue({
        $key: null,
        Task: '' 
      });
    }
  }
}
