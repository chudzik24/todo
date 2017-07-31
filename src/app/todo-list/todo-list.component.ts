import { Component, OnInit } from '@angular/core';
import { TodoItem } from "app/todo-item/todo-item.component";
import { TodoService } from "app/todo.service";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoItems: TodoItem[] = [];
  doneItems: TodoItem[] = [];
  newItemDescription: string;
  filterValue: string = '';
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todoService.getTodoItems().subscribe((items: TodoItem[]) => this.todoItems = items);
  }
  todoSelectionChanged(item: TodoItem) {
    var allItems = this.getAllItems();
    this.todoItems = allItems.filter((el: TodoItem) => !el.checked);
    this.doneItems = allItems.filter((el: TodoItem) => el.checked);
  }
  addNewItem() {    
    var id = Math.max(...this.getAllItems().map<number>((el: TodoItem) => el.id)) + 1;
    this.todoItems.push({id: id, checked: false, description: this.newItemDescription});
    this.newItemDescription = '';
    this.filterValue = '';
  }
  private getAllItems() : TodoItem[] {
    return this.todoItems.concat(this.doneItems);
  }
}
