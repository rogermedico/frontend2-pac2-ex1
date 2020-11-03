import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class TodoService {

  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }


  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.client.base_url, todo, /* this.httpOtions */);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.client.base_url)/*.pipe(
      map(res => {
        return res["data"].docs as Todo[];
      })
    )*/
  }

  editTodo(todo: Todo) {
    return this.http.put<Todo>(environment.client.base_url, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${environment.client.base_url}/${id}`)/*.pipe(
      map(res => {
        return res;
      })
    )*/
  }

}
