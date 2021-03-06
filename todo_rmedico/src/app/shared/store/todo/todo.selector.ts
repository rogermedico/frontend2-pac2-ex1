import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStore } from '../../models/store.model';
import { TodoListState } from '../../store/todo/todo.state';


/* Select a feature from state, in this case we only have one feature called todoList but 
 * in bigger applications the state could be more bigger. At some component maybe we only
 * need a piece of state (feature) and we select that piece here
 */
//export const selectTodoList = (state: AppStore) => state.todoList;

/* This line of code do exactly the same job that the above one. createFeatureSelector is 
 * an optimization to get a top level feature state (acording to ngrx documentation).
 * Since todoList is a top level feature we better use createFeatureSelector.
 */
export const selectTodoList = createFeatureSelector<AppStore, TodoListState>('todoList');

export const selectTodos = createSelector(selectTodoList, (state: TodoListState) => state.todos);