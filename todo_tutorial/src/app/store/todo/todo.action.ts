import { TodoState } from './todo.state'
import { Todo } from '../../models/todo.model'
import { createAction, props } from '@ngrx/store'

export enum TodoActionTypes {
  CREATE_TODO = '[Todo] CREATE_TODO',
  CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS',
  CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR',

  GET_TODO = '[Todo] GET_TODO',
  GET_TODO_SUCCESS = '[Todo] GET_TODO_SUCCESS',
  GET_TODO_ERROR = '[Todo] GET_TODO_ERROR',

  UPDATE_TODO = '[Todo] UPDATE_TODO',
  UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS',
  UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR',

  GET_TODOS = '[Todo] GET_TODOS',
  GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS',
  GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR',

  DELETE_TODO = '[Todo] DELETE_TODO',
  DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR',

  COMPLETE_TODO = '[Todo] COMPLETE_TODO',
  COMPLETE_TODO_SUCCESS = '[Todo] COMPLETE_TODO_SUCCESS',
  COMPLETE_TODO_ERROR = '[Todo] COMPLETE_TODO_ERROR',
}

/* Actions for Get all Todos */
export const GetTodos = createAction(TodoActionTypes.GET_TODOS);
export const GetTodosSuccess = createAction(TodoActionTypes.GET_TODOS_SUCCESS, props<{ payload: TodoState[] }>());
export const GetTodosError = createAction(TodoActionTypes.GET_TODOS_ERROR);

/* Action for Create one Todo */
export const CreateTodo = createAction(TodoActionTypes.CREATE_TODO, props<{ payload: Todo }>());
export const CreateTodosSuccess = createAction(TodoActionTypes.CREATE_TODO_SUCCESS, props<{ payload: TodoState }>());
export const CreateTodosError = createAction(TodoActionTypes.CREATE_TODO_ERROR);

/* Action for Get one Todo */
export const GetTodo = createAction(TodoActionTypes.GET_TODO, props<{ payload: string }>());
export const GetTodoSuccess = createAction(TodoActionTypes.GET_TODO_SUCCESS, props<{ payload: Todo }>());
export const GetTodoError = createAction(TodoActionTypes.GET_TODO_ERROR);

/* Action for Update one Todo */
export const UpdateTodo = createAction(TodoActionTypes.UPDATE_TODO, props<{ payload: TodoState }>());
export const UpdateTodoSuccess = createAction(TodoActionTypes.UPDATE_TODO_SUCCESS, props<{ payload: TodoState }>());
export const UpdateTodoError = createAction(TodoActionTypes.UPDATE_TODO_ERROR, props<{ payload: TodoState }>());

/* Action for Delete one Todo */
export const DeleteTodo = createAction(TodoActionTypes.DELETE_TODO, props<{ payload: TodoState }>());
export const DeleteTodoSuccess = createAction(TodoActionTypes.DELETE_TODO_SUCCESS, props<{ payload: TodoState }>());
export const DeleteTodoError = createAction(TodoActionTypes.DELETE_TODO_ERROR, props<{ payload: TodoState }>());

/* Action to complete one todo */
export const CompleteTodo = createAction(TodoActionTypes.COMPLETE_TODO, props<{ payload: TodoState }>());
export const CompleteTodoSuccess = createAction(TodoActionTypes.COMPLETE_TODO_SUCCESS, props<{ payload: TodoState }>());
export const CompleteTodoError = createAction(TodoActionTypes.COMPLETE_TODO_ERROR);
