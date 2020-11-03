import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListState } from '../../store/todo/todo.state';

export const selectTodoListState = createFeatureSelector<TodoListState>('todoList');

export const selectAll = createSelector(selectTodoListState, state => state.todos);