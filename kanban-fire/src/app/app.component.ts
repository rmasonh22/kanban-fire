import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    {
      title: 'Buy Milk',
      description: 'Go store and buy milk'
    },
    {
      title: 'Create a Kanban app',
      description: 'Using firebase and angular to create a kanban app!'
    }
  ];
}
