import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: { name: string; description: string }[] = [
    { name: 'Task 1', description: 'Description for Task 1' },
    { name: 'Task 2', description: 'Description for Task 2' },
    { name: 'Task 3', description: 'Description for Task 3' },
  ];

  addTask(task: { name: string; description: string }) {
    this.tasks.push(task);
  }

  isTaskNameExists(name: string): boolean {
    return this.tasks.some(task => task.name === name);
  }

  moveTaskTop(index: number) {
    if (index > 0) {
      const temp = this.tasks[index];
      this.tasks[index] = this.tasks[index - 1];
      this.tasks[index - 1] = temp;
    }
  }

  moveTaskDown(index: number) {
    if (index < this.tasks.length -1) {
      const temp = this.tasks[index];
      this.tasks[index] = this.tasks[index + 1];
      this.tasks[index + 1] = temp;
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
