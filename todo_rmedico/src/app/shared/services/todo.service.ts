import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Todo } from '../models/todo.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class TodoService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.backendUrl, todo, this.httpOptions);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.backendUrl);
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(environment.backendUrl, todo, this.httpOptions);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${environment.backendUrl}/${id}`);
  }

}
