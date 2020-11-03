import { TodoListState, TodoState } from '../../../store/todo/todo.state';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as TodoAction from '../../../store/todo/todo.action';
import * as TodoSelectors from '../../../store/todo/todo.selector';
import { AppStore } from '../../../models/store.model';

@Component({

  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoListState$: Observable<TodoListState>;

  constructor(private store$: Store<AppStore>) { }

  ngOnInit() {

    this.todoListState$ = this.store$.select(TodoSelectors.selectAll);

    this.store$.dispatch(TodoAction.GetTodos());

  }

  onCreate(todo: TodoState) {

    console.log('create todo', todo)
    this.store$.dispatch(TodoAction.CreateTodo({ payload: todo }));

  }


  onDelete(todo: TodoState) {

    this.store$.dispatch(TodoAction.DeleteTodo({ payload: todo }));

  }

  onEdit(todo: TodoState) {

    this.store$.dispatch(TodoAction.UpdateTodo({ payload: todo }));

  }

  completeTodo(todo: TodoState) {

    this.store$.dispatch(TodoAction.CompleteTodo({ payload: todo }));

  }
}
