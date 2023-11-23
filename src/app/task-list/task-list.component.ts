import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: any[] = [];
  selectedTaskIndex: number = -1;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data.map(item => ({id: item.id, name: item.tieuDe, description: item.moTa }));
        console.log(this.tasks);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  selectTask(index: number) {
    this.selectedTaskIndex = index;
    this.taskService.setSelectedTask(this.tasks[index]);
  }

  moveTaskDown() {
    if (this.selectedTaskIndex < this.tasks.length - 1) {
      const selectedTask = this.tasks[this.selectedTaskIndex];
      this.tasks.splice(this.selectedTaskIndex, 1);
      this.tasks.splice(this.selectedTaskIndex + 1, 0, selectedTask);
      this.selectedTaskIndex++;
    }
  }

  moveTaskTop() {
    if (this.selectedTaskIndex > 0) {
      const selectedTask = this.tasks[this.selectedTaskIndex];
      this.tasks.splice(this.selectedTaskIndex, 1);
      this.tasks.splice(this.selectedTaskIndex - 1, 0, selectedTask);
      this.selectedTaskIndex--;
    }
  }

  deleteTask() {
    if (this.selectedTaskIndex !== -1) {
      const selectedTask = this.tasks[this.selectedTaskIndex];
      this.taskService.deleteTask(selectedTask.id).subscribe(
        (data) => {
          console.log('Task deleted successfully:', data);
          this.getTask();
          this.selectedTaskIndex = -1;
        },
        (error) => {
          console.error('Error deleting tasks:', error);
        }
      );
    }
  }

  viewTaskDetail() {
    if (this.selectedTaskIndex !== -1) {
      this.router.navigate(['/task-detail']);
    }
  }
  // constructor(public taskService: TaskService, private router: Router) {}

  

  // moveTaskTop() {
  //   this.taskService.moveTaskTop(this.selectedTaskIndex);
  // }

  // moveTaskDown() {
  //   this.taskService.moveTaskDown(this.selectedTaskIndex);
  // }

  // deleteTask() {
  //   this.taskService.deleteTask(this.selectedTaskIndex);
  // }

  // viewTaskDetail() {
  //   if (this.selectedTaskIndex !== -1) {
  //     const selectedTask = this.taskService.tasks[this.selectedTaskIndex];
  //     this.router.navigate(['/task-detail', { name: selectedTask.name, description: selectedTask.description }]);
  //   }
  // }
}
