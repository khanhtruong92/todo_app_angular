import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskName: string = '';
  description: string = '';
  showAlert: boolean = false;

  constructor(private taskService: TaskService, private router: Router) {}

  createTask() {
    if (this.taskName.trim() === '' || this.description.trim() === '') {
      this.showAlert = true;
      return;
    }
    this.taskService.createTask({ tieuDe: this.taskName, moTa: this.description}).subscribe(
      (data) => {
        console.log('Task created successfully:', data);
        // Sau khi tạo công việc, cập nhật danh sách công việc
        this.router.navigate(['/tasks']);
      },
      (error) => {
        console.error('Error creating task:', error);
      }
    );
  }

  // addTask() {
  //   if (this.taskName.trim() === '') {
  //     alert('Ten task bat buoc phai dien noi dung');
  //     return;
  //   }

  //   if (this.taskService.isTaskNameExists(this.taskName)) {
  //     alert('Ten task da ton tai, hay dat ten khac');
  //     return;
  //   }

  //   this.taskService.addTask({ name: this.taskName, description: this.description});
  //   this.taskName = '';
  //   this.description = '';
  // }
}
