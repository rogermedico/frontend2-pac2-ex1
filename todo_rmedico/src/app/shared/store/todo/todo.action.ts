import { Todo } from '../../models/todo.model';
import { createAction, props } from '@ngrx/store';

export enum TodoActionTypes {
  LOAD_TODOS = '[Todo] LOAD_TODOS',
  LOAD_TODOS_SUCCESS = '[Todo] LOAD_TODOS_SUCCESS',
  LOAD_TODOS_ERROR = '[Todo] LOAD_TODOS_ERROR',

  CREATE_TODO = '[Todo] CREATE_TODO',
  CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS',
  CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR',

  UPDATE_TODO = '[Todo] UPDATE_TODO',
  UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS',
  UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR',

  DELETE_TODO = '[Todo] DELETE_TODO',
  DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR',

  STATUS_TOGGLE_TODO = '[Todo] STATUS_TOGGLE_TODO',
  STATUS_TOGGLE_TODO_SUCCESS = '[Todo] STATUS_TOGGLE_TODO_SUCCESS',
  STATUS_TOGGLE_TODO_ERROR = '[Todo] STATUS_TOGGLE_TODO_ERROR'
}

/* load todos */
export const LoadTodos = createAction(TodoActionTypes.LOAD_TODOS);
export const LoadTodosSuccess = createAction(TodoActionTypes.LOAD_TODOS_SUCCESS, props<{ todoList: Todo[] }>());
export const LoadTodosError = createAction(TodoActionTypes.LOAD_TODOS_ERROR);

/* create todo */
export const CreateTodo = createAction(TodoActionTypes.CREATE_TODO, props<{ todo: Todo }>());
export const CreateTodoSuccess = createAction(TodoActionTypes.CREATE_TODO_SUCCESS, props<{ todo: Todo }>());
export const CreateTodoError = createAction(TodoActionTypes.CREATE_TODO_ERROR);

/* update todo */
export const UpdateTodo = createAction(TodoActionTypes.UPDATE_TODO, props<{ todo: Todo }>());
export const UpdateTodoSuccess = createAction(TodoActionTypes.UPDATE_TODO_SUCCESS, props<{ todo: Todo }>());
export const UpdateTodoError = createAction(TodoActionTypes.UPDATE_TODO_ERROR);

/* delete todo */
export const DeleteTodo = createAction(TodoActionTypes.DELETE_TODO, props<{ id: number }>());
export const DeleteTodoSuccess = createAction(TodoActionTypes.DELETE_TODO_SUCCESS, props<{ id: number }>());
export const DeleteTodoError = createAction(TodoActionTypes.DELETE_TODO_ERROR);

/* complete todo */
export const StatusToggleTodo = createAction(TodoActionTypes.STATUS_TOGGLE_TODO, props<{ todo: Todo }>());
export const StatusToggleTodoSuccess = createAction(TodoActionTypes.STATUS_TOGGLE_TODO_SUCCESS, props<{ todo: Todo }>());
export const StatusToggleTodoError = createAction(TodoActionTypes.STATUS_TOGGLE_TODO_ERROR);