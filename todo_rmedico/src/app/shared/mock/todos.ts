import { Todo } from '../models/todo.model';

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Buy bread',
    description: 'Buy bread at that recently opened shop',
    date: new Date(Date.parse('2019-10-10T14:48:00')),
    status: false,
  },
  {
    id: 2,
    title: 'Go to gym',
    description: 'Go to gym lazy boy...!!!!!!',
    date: new Date(Date.parse('2020-10-05T19:23:00')),
    status: true,
  },
  {
    id: 3,
    title: 'Phone mum',
    description: 'Remember that you have a mom to call',
    date: new Date(),
    status: false,
  }
]; 