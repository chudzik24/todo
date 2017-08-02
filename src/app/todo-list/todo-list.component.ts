import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoItem } from "app/todo-item/todo-item.component";
import { TodoService } from "app/todo.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  items: TodoItem[] = [];
  newItemDescription: string;
  filterValue: string = '';
  getTodoItemsSubscription: Subscription;
  addItemSubscription: Subscription;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoItemsSubscription = this.todoService.getTodoItems().subscribe((items: TodoItem[]) => this.items = items);
  }
  get todoItems(): TodoItem[] {
    return this.items.filter(el => !el.checked);
  }
  get doneItems() : TodoItem[] {
    return this.items.filter(el => el.checked);
  }
  ngOnDestroy() {
    if (this.getTodoItemsSubscription) {
      this.getTodoItemsSubscription.unsubscribe();
    }
    if (this.addItemSubscription) {
      this.addItemSubscription.unsubscribe();
    }
  }

  todoSelectionChanged(item: TodoItem) {
    console.log('changed: ' + item);
  }

  addNewItem() {    
    this.todoItems.push(this.todoService.add({checked: false, description: this.newItemDescription}));
    this.newItemDescription = '';
    this.filterValue = '';
  }

  private getAllItems() : TodoItem[] {
    return this.items;
  }
}
