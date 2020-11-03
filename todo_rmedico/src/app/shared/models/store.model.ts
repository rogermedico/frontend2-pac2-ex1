import { TodoListState } from '../../shared/store/todo/todo.state';

export interface AppStore {
  todoList: TodoListState;
}
