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
    this.userTodo = { ...this.todo };
  }

  createTodo(todo: TodoState) {
    this.created.emit(todo)
  }


  editTodo() {
    this.userTodo.editing = !this.userTodo.editing;
  }

  completeTodo(todo: TodoState) {
    this.completed.emit(todo)
  }


  editTodoSubmit() {
    this.edited.emit(this.userTodo);
  }

}
