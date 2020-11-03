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

  genId(collection) {
    var maxId = 0;
    collection.reduce(function (prev, item) {
      maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
    }, null);
    return maxId + 1;
  };

}