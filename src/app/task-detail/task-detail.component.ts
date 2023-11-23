// task-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: {name: string, description: string } = {name: '', description: '' };

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
    this.task = this.taskService.getSelectedTask();
  }
}
