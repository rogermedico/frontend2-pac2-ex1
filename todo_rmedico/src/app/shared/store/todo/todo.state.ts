import { Todo } from '../../models/todo.model';

export interface TodoListState {
  todos: Todo[];
  loading: boolean;
  pending: number;
}