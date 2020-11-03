import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { todos as todoDB } from '../mock/todos';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const todos: Todo[] = todoDB;
    return { todos };
  }

}