import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../../../shared/models/todo.model';
import * as TodoActions from '../../../shared/store/todo/todo.action';
import * as TodoSelectors from '../../../shared/store/todo/todo.selector';
import { AppStore } from '../../../shared/models/store.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public todos$: Observable<any> = this.store$.select(TodoSelectors.selectTodos);
  public newTodoFlag: boolean = false;
  public todoForm: FormGroup;

  constructor(private store$: Store<AppStore>, private fb: FormBuilder) {
    this.store$.dispatch(TodoActions.LoadTodos());
  }

  createForm() {
    this.todoForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  newTodo() {
    this.newTodoFlag = true;
    this.createForm();
  }

  saveNewTodo() {
    this.newTodoFlag = false;
    this.store$.dispatch(TodoActions.CreateTodo({
      todo: {
        title: this.title.value,
        date: new Date(),
        description: this.description.value,
        status: false,
      }
    }));
  }

  cancelNewTodo() {
    this.newTodoFlag = false;
  }

  statusToggleTodo(todo: Todo) {
    this.store$.dispatch(TodoActions.StatusToggleTodo({ todo: todo }));
  }

  saveEditedTodo(todo: Todo) {
    this.store$.dispatch(TodoActions.UpdateTodo({ todo: todo }));
  }

  deleteTodo(todoId: number) {
    this.store$.dispatch(TodoActions.DeleteTodo({ id: todoId }));
  }

  get title() {
    return this.todoForm.get('title');
  }

  get description() {
    return this.todoForm.get('description');
  }

}
