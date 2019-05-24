import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../interfaces/todo-interface';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  newTodo: TodoInterface = new Todo();

  

  todos: object[] = [
    { title: 'Clean my car', isCompleted: false, isDeleted: false},
    { title: 'Buy more shampoo', isCompleted: false, isDeleted: false},
    { title: 'Hit the gym', isCompleted: false, isDeleted: false},
    { title: 'Run', isCompleted: false, isDeleted: false}
  ];

  toggleCompleted(todo: TodoInterface): void { todo.isCompleted = !todo.isCompleted; }
  
  toggleDeleted(todo: TodoInterface): void { todo.isDeleted = !todo.isDeleted ;} 

  addTodo(): void {
    if (this.newTodo.title.trim() !== '') {
      this.todos.push(this.newTodo);
      this.newTodo = new Todo ();
    }
  }

  ngOnInit() {
  }

}
