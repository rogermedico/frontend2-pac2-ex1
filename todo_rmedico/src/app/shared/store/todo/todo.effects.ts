import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as TodoActions from './todo.action';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';


@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions, private ts: TodoService) { }

  /* get todos */
  getTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.LOAD_TODOS),
    mergeMap(() => this.ts.getTodos().pipe(
      map(todos => {
        return { type: TodoActions.TodoActionTypes.LOAD_TODOS_SUCCESS, todoList: todos }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.LOAD_TODOS_ERROR }))
    ))
  ));

  /* create todo */
  createTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.CREATE_TODO),
    mergeMap((action: { type: string, todo: Todo }) => this.ts.createTodo(action.todo).pipe(
      map(todo => {
        return { type: TodoActions.TodoActionTypes.CREATE_TODO_SUCCESS, todo: todo }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.CREATE_TODO_ERROR }))
    ))
  ));

  /* update todo */
  updateTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.UPDATE_TODO),
    mergeMap((action: { type: string, todo: Todo }) => this.ts.editTodo(action.todo).pipe(
      map(() => {
        return { type: TodoActions.TodoActionTypes.UPDATE_TODO_SUCCESS, todo: action.todo }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.UPDATE_TODO_ERROR }))
    ))
  ));

  /* delete todo effect */
  deleteTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.DELETE_TODO),
    mergeMap((action: { type: string, id: number }) => this.ts.deleteTodo(action.id).pipe(
      map(() => {
        return { type: TodoActions.TodoActionTypes.DELETE_TODO_SUCCESS, id: action.id }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.DELETE_TODO_ERROR }))
    ))
  ));

  /* toggle status todo */
  statusToggleTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.TodoActionTypes.STATUS_TOGGLE_TODO),
    mergeMap((action: { type: string, todo: Todo }) => this.ts.editTodo({ ...action.todo, status: !action.todo.status }).pipe(
      map(() => {
        return { type: TodoActions.TodoActionTypes.UPDATE_TODO_SUCCESS, todo: { ...action.todo, status: !action.todo.status } }
      }),
      catchError(() => of({ type: TodoActions.TodoActionTypes.UPDATE_TODO_ERROR }))
    ))
  ));

}