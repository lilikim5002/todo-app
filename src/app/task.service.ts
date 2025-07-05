import { computed, Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = signal<Task[]>([
    {id:1, title:'Закрыть проект "8Angel', description:'Провести анализ ЦА', status:true},
    {id:2, title:'Обзвонить поставщикам', description:'Номера: +79374573847', status:false},
    {id:3, title:'Полготовить материал к брифингу', description:'Обсуждение формата общкния с клиентами', status: true}
  ]);

  private nextId = signal<number>(4);
  taskList = computed(() => this.tasks());

  getTask(id:number):Task | undefined {
    return this.tasks().find(task => task.id === id);
  }

  addTask(task:Task):void{
    task.id = this.nextId();
    this.tasks.update(tasks=>[...tasks, task]);
    this.nextId.update(id => id+1);
  }

  deliteTask(id:number):void{
    this.tasks.update(tasks => tasks.filter(task => task.id !==id))
  }

  updateTask(task:Task):void{
    this.tasks.update(tasks => {
      return tasks.map(t => (t.id === task.id ? task : t));
    });
  }


}
