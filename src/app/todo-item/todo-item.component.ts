import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface TodoItem {
  id: number;
  checked: boolean;
  description: string;
}
@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() selectedChanged:EventEmitter<TodoItem> = new EventEmitter();
  constructor() { 

  }
  itemChanged() {
    this.item.checked = !this.item.checked;
    this.selectedChanged.emit(this.item);
  }
  ngOnInit() {
  }

}
