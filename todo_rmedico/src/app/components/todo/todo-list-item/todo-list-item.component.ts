import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() todo: Todo;
  @Output() statusToggleTodo = new EventEmitter<Todo>();
  @Output() saveEditedTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();

  public editingTodo: boolean = false;
  public todoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.todoForm = this.fb.group({
      title: [this.todo.title, [Validators.required]],
      description: [this.todo.description, [Validators.required]]
    });
  }

  doStatusToggle() {
    this.statusToggleTodo.emit(this.todo);
  }

  doEditTodo() {
    this.editingTodo = true;
    this.createForm();
  }

  doCancelEditedTodo() {
    this.editingTodo = false;
  }

  doSaveEditedTodo() {
    this.editingTodo = false;
    this.saveEditedTodo.emit({
      ...this.todo,
      title: this.title.value,
      description: this.description.value
    });
  }

  doDeleteTodo() {
    this.deleteTodo.emit(this.todo.id);
  }

  get title() {
    return this.todoForm.get('title');
  }

  get description() {
    return this.todoForm.get('description');
  }

}
