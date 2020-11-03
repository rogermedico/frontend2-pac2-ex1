import { TodoState } from './todo.state';
import { environment } from '../../../environments/environment';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as TodoActions from './todo.action';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Injectable()
export class TodoEffects {

  constructor(private ts: TodoService, private actions$: Actions) { }

  GetTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.GET_TODOS),
    mergeMap(() => this.ts.getTodos().pipe(
      map(todos => {
        return { type: TodoActions.TodoActionTypes.GET_TODOS_SUCCESS, payload: todos }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.GET_TODOS_ERROR }))
    ))
  ));

  CreateTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.CREATE_TODO),
    mergeMap((action: { type: string, payload: TodoState }) => this.ts.createTodo(action.payload).pipe(
      map(todo => {
        return { type: TodoActions.TodoActionTypes.CREATE_TODO_SUCCESS, payload: todo }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.CREATE_TODO_ERROR }))
    ))
  ));

  deleteTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.DELETE_TODO),
    mergeMap((action: { type: string, payload: Todo }) => this.ts.deleteTodo(action.payload.id).pipe(
      map(() => {
        return { type: TodoActions.TodoActionTypes.DELETE_TODO_SUCCESS, payload: action.payload }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.DELETE_TODO_ERROR }))
    ))
  ));

  updateTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.UPDATE_TODO),
    mergeMap((action: { type: string, payload: Todo }) => this.ts.editTodo(action.payload).pipe(
      map(() => {
        return { type: TodoActions.TodoActionTypes.UPDATE_TODO_SUCCESS, payload: action.payload }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.UPDATE_TODO_ERROR }))
    ))
  ));

}