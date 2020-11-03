import { Todo } from '../../models/todo.model';
import { TodoListState } from './todo.state';
import * as TodoActions from './todo.action';
import { Action, createReducer, on } from '@ngrx/store';


/* In case that you want to start the app with something in the state */
const defaultTodosState: Todo[] = [
  // {
  //   id: 2, //in-memory-data-service id
  //   _id: 'new',
  //   title: 'asdf',
  //   description: 'asdf',
  //   date: '25/10/2020 16:15',
  //   status: ''
  // }
];

const defaultState: TodoListState = {
  todos: defaultTodosState,
  loading: false,
  pending: 0
};

const reducer = createReducer(defaultState,

  /* load */
  on(TodoActions.LoadTodos, state => ({
    ...state,
    loading: true
  })),

  /* load success */
  on(TodoActions.LoadTodosSuccess, (state, action) => {
    return {
      ...state,
      todos: state.todos.concat(action.todoList),
      loading: false
    }
  }),

  /* create */
  on(TodoActions.CreateTodo, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),

  /* create success */
  on(TodoActions.CreateTodoSuccess, (state, action) => ({
    ...state,
    todos: [
      ...state.todos,
      action.todo
    ],
    loading: false
  })),

  /* update */
  on(TodoActions.UpdateTodo, state => ({
    ...state,
    loading: true
  })),

  /* update success */
  on(TodoActions.UpdateTodoSuccess, (state, action) => ({
    ...state,
    todos: state.todos.map(t => {
      if (t.id == action.todo.id) return action.todo;
      else return t;
    }),
    loading: false
  })),

  /* delete */
  on(TodoActions.DeleteTodo, state => ({
    ...state,
    loading: true
  })),

  /* delete success */
  on(TodoActions.DeleteTodoSuccess, (state, action) => {
    return {
      ...state,
      todos: state.todos.filter(t => t.id != action.id),
      loading: false
    }
  }),

  /* status toggle */
  on(TodoActions.StatusToggleTodo, state => ({
    ...state,
    loading: true
  })),

  /* status toggle complete */
  on(TodoActions.StatusToggleTodoSuccess, (state, action) => ({
    ...state,
    todos: state.todos.map(t => {
      if (t.id == action.todo.id) t.status = !t.status;
      return t;
    }),
    loading: false
  }))
);

export function todoReducer(state: TodoListState | undefined, action: Action) {
  return reducer(state, action);
}
