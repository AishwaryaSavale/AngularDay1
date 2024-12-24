import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [TodoListComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  task: string = ''; 
  tasks: string[] = []; 

  
  addTask() {
    if (this.task.trim()) { 
      this.tasks.push(this.task);
      this.task = '';
    }
  }
  
  

}
