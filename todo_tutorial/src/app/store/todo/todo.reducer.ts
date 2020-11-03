import { Todo } from '../../models/todo.model';
import { initializeTodoState, TodoListState, TodoState } from './todo.state';
import * as TodoActions from './todo.action';
import { Action, createReducer, on } from '@ngrx/store';

const defaultTodoStates: TodoState[] = [
  {
    ...Todo.generateMockTodo(),
    ...initializeTodoState()
  }
]


const defaultState: TodoListState = {
  todos: defaultTodoStates,
  loading: false,
  pending: 0
}

const reducer = createReducer(defaultState,

  on(TodoActions.CreateTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.map(t => {
        if (t._id == action.payload._id) return { ...t, loading: true }
        else return t;
      })
    }
  }),

  on(TodoActions.CreateTodosSuccess, (state, action) => {
    return {
      ...state,
      todos: [
        ...state.todos.filter(t => t._id != "new"), {
          ...action.payload,
          _id: '',
          edited: false,
          create: false
        }, {
          ...Todo.generateMockTodo(),
          ...initializeTodoState()
        }]
    }
  }),

  on(TodoActions.GetTodos, state => {
    return { ...state, loaded: false, loading: true };
  }),

  on(TodoActions.GetTodosSuccess, (state, action) => {
    return {
      ...state,
      todos: [
        ...action.payload,
        defaultTodoStates[0]
      ],
      loading: false
    };
  }),

  on(TodoActions.DeleteTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.filter(t => t.id != action.payload.id),
    }
  }),

  on(TodoActions.DeleteTodoSuccess, state => {
    return state;
  }),

  on(TodoActions.DeleteTodoError, (state, action) => {
    return {
      ...state,
      todos: [
        ...state.todos,
        action.payload
      ]
    }
  }),

  on(TodoActions.UpdateTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.map(t => {
        if (t.id == action.payload.id) {
          return {
            ...t,
            loading: true
          }
        }
        return t
      })
    };
  }),

  on(TodoActions.UpdateTodoSuccess, (state, action) => {
    return modifyTodoState(state, action.payload, {})
  }),

  on(TodoActions.UpdateTodoError, (state, action) => {
    return {
      ...state,
      todos: state.todos.map(t => {
        if (t._id == action.payload._id) {
          t.error = true;
        }
        return t
      })
    };
  }),

  on(TodoActions.CompleteTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.map(t => {
        if (t.id == action.payload.id) {
          return { ...t, status: 'done' }
        }
        return t
      })
    };
  })

)

export function todoReducer(state: TodoListState | undefined, action: Action) {
  return reducer(state, action);
}

function modifyTodoState(state, todo: TodoState, modifications): TodoListState {

  return {
    ...state,
    todos: state.todos.map(t => {
      if (t.id == todo.id) {

        return { ...t, ...todo, ...modifications, editing: false, loading: false, edited: true }
      } else {

        return t;
      }
    })
  }
}


