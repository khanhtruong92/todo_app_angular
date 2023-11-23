import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://localhost:7228/api/DSCongViec';
  private selectedTask: any;

  constructor(private http: HttpClient) {}

  getTasks() : Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTask(taskData: { tieuDe: string, moTa: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, taskData);
  }

  deleteTask(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url);
  }

  setSelectedTask(task: any) {
    this.selectedTask = task;
  }

  getSelectedTask() {
    return this.selectedTask;
  }

  // tasks: { name: string; description: string }[] = [
  //   { name: 'Task 1', description: 'Description for Task 1' },
  //   { name: 'Task 2', description: 'Description for Task 2' },
  //   { name: 'Task 3', description: 'Description for Task 3' },
  // ];

  // addTask(task: { name: string; description: string }) {
  //   this.tasks.push(task);
  // }

  // isTaskNameExists(name: string): boolean {
  //   return this.tasks.some(task => task.name === name);
  // }

  // moveTaskTop(index: number) {
  //   if (index > 0) {
  //     const temp = this.tasks[index];
  //     this.tasks[index] = this.tasks[index - 1];
  //     this.tasks[index - 1] = temp;
  //   }
  // }

  // moveTaskDown(index: number) {
  //   if (index < this.tasks.length -1) {
  //     const temp = this.tasks[index];
  //     this.tasks[index] = this.tasks[index + 1];
  //     this.tasks[index + 1] = temp;
  //   }
  // }

  // deleteTask(index: number) {
  //   this.tasks.splice(index, 1);
  // }
}
