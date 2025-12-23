import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})

export class ToDoList {

  tasksArray: Task[] = [
    {id: 1, description: "task 1", completed: false},
    {id: 2, description: "task 2", completed: false},
    {id: 3, description: "task 3", completed: false}
  ];
}
