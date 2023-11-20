import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  selectedTaskIndex: number = -1;

  constructor(public taskService: TaskService, private router: Router) {}

  selectTask(index: number) {
    this.selectedTaskIndex = index;
  }

  moveTaskTop() {
    this.taskService.moveTaskTop(this.selectedTaskIndex);
  }

  moveTaskDown() {
    this.taskService.moveTaskDown(this.selectedTaskIndex);
  }

  deleteTask() {
    this.taskService.deleteTask(this.selectedTaskIndex);
  }

  viewTaskDetail() {
    if (this.selectedTaskIndex !== -1) {
      const selectedTask = this.taskService.tasks[this.selectedTaskIndex];
      this.router.navigate(['/task-detail', { name: selectedTask.name, description: selectedTask.description }]);
    }
  }
}
