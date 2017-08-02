import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoItem } from "app/todo-item/todo-item.component";
import { ActivatedRoute, Router } from "@angular/router";
import { TodoService } from "app/todo.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  selectedItem: TodoItem;
  subscription: Subscription;
  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    var id = +this.route.snapshot.params['id'];
    this.subscription = this.todoService.getItemById(id).subscribe((x: TodoItem) => this.selectedItem = x);
  }

  goBack() {
    this.router.navigate(['home']);
  }
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
