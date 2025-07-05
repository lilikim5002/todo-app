import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit{
  task: Task | undefined;
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);
  private router = inject(Router);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTask(id);

    if (!this.task){
      this.router.navigate(['/tasks']);
    }
  }

}
