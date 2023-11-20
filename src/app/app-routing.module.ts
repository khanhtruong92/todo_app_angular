import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'tasks', component: TaskListComponent},
  { path: 'add-task', component: AddTaskComponent},
  { path: 'task-detail', component: TaskDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
