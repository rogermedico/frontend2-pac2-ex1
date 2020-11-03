import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { TodoState } from '../../../store/todo/todo.state';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent implements OnInit {


  @Input() todo: TodoState;

  @Output() created = new EventEmitter<TodoState>();
  @Output() deleted = new EventEmitter<TodoState>();
  @Output() edited = new EventEmitter<any>();
  @Output() completed = new EventEmitter<any>();

  public userTodo: TodoState;

  constructor() { }

  ngOnInit() {
    console.log(this.todo)
    this.userTodo = { ...this.todo };
  }

  createTodo(todo) {
    this.created.emit(todo)
  }


  editTodo(todo) {
    this.userTodo.editing = !this.userTodo.editing;
  }

  completeTodo(todo) {
    this.completed.emit(todo)
  }


  editTodoSubmit(todo) {
    this.edited.emit(this.userTodo);
  }

}
