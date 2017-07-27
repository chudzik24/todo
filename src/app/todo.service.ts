import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { TodoItem } from "app/todo-item/todo-item.component";
import {Http, Response } from '@angular/http';
@Injectable()
export class TodoService {
  constructor(private http: Http) { }
  getTodoItems() : Observable<TodoItem[]> {
    return this.http.get('todo.json').map(response => response.json() as TodoItem[]);                
  }
}
