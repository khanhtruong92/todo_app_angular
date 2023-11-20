import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskName: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskName.trim() === '') {
      alert('Ten task bat buoc phai dien noi dung');
      return;
    }

    if (this.taskService.isTaskNameExists(this.taskName)) {
      alert('Ten task da ton tai, hay dat ten khac');
      return;
    }

    this.taskService.addTask({ name: this.taskName, description: this.description});
    this.taskName = '';
    this.description = '';
  }
}
