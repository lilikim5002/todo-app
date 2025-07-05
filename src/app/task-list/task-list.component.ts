import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{

 taskService = inject(TaskService);
 taslList = this.taskService.taskList;

 private router = inject(Router);

  ngOnInit(): void {
  }

  deleteTask(id:number):void{
    this.taskService.deliteTask(id);
  }

  viewDetails(id:number):void{
    this.router.navigate(['/tasks', id]);
  }

}
