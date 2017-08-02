import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import 'rxjs/add/operator/map'
import { TodoItem } from "app/todo-item/todo-item.component";
import {Http, Response } from '@angular/http';
@Injectable()
export class TodoService {
  private items: TodoItem[] = [];
  private remoteFetched: boolean;
  constructor(private http: Http) { }

  getTodoItems() : Observable<TodoItem[]> {
    if (!this.remoteFetched) {
      let subject: Subject<TodoItem[]>= new Subject();
      this.http.get('todo.json').map(response => response.json() as TodoItem[]).subscribe(
        (res: TodoItem[]) => { this.items.push(...res); subject.next(res); }, 
        (err: any) => subject.error(err), 
        () =>  { this.remoteFetched = true; subject.complete(); });
      return subject.asObservable();
    } 
    return Observable.of(this.items);            
  }

  getItemById(id: number) : Observable<TodoItem> {
    return this.getTodoItems().map<TodoItem[], TodoItem>((values: TodoItem[]) => values.filter(value => value.id === id)[0]);
  }
  
  add(item: TodoItem) : TodoItem {
    item.id = Math.max(...this.items.map<number>((el: TodoItem) => el.id)) + 1;
    this.items.push(item);
    return item;
  }
}
