import { Component, inject } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  newTask: Task = {id:0, title:'', description:'', status: false};
  taskService = inject(TaskService);
  private router = inject(Router);

  onSubmit():void{
    if (this.newTask.title){
      this.taskService.addTask(this.newTask);
      this.router.navigate(['/tasks']);
    }
    else{
      alert('Введите название задачи.');
    }
  }

}
