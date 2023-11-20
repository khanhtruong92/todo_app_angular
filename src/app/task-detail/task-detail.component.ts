// task-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: { name: string, description: string } = { name: '', description: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Lấy thông tin từ paramMap
    const name = this.route.snapshot.paramMap.get('name');
    const description = this.route.snapshot.paramMap.get('description');

    if (name && description) {
      this.task = { name, description };
    }
  }
}
