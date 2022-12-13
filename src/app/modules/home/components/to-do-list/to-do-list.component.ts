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

  ];


  constructor() { }

  ngOnInit(): void{}

}
