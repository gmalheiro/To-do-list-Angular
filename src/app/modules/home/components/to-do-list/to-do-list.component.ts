import { Component , OnInit} from '@angular/core';

//Interface
import { TaskList } from './../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void{
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event,1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente deletar tudo?");

    if(confirm){
      this.taskList = [];
    }

  }

}
