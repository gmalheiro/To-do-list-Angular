import { Component , OnInit} from '@angular/core';

//Interface
import { TaskList } from './../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  public taskList: Array<TaskList> = [
    {task: "Estudar Angular",checked: false},
    {task: "Estudar React",checked: true},
  ];

  constructor() { }

  ngOnInit(): void{
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event,1);
  }

}
