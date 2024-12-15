import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDosService } from '../../../core/services/to-dos.service';
import { StatusToDo } from '../../enumerations/status-todo.enum';

@Component({
  selector: 'app-new-tache',
  templateUrl: './new-tache.component.html',
  styleUrl: './new-tache.component.css'
})
export class NewTacheComponent implements OnInit {
  toDoFormGroup!: FormGroup;
  todoStatus : string[] = [];

  constructor(private fb: FormBuilder, 
              private toDoService: ToDosService){
  }

  ngOnInit(): void {
    for(let element in StatusToDo){
      let value = StatusToDo[element];
        this.todoStatus.push(value);
    }

    this.toDoFormGroup = this.fb.group({
      dateCreation: this.fb.control(''),
      nomToDo: this.fb.control(''),
      estimation: this.fb.control(''),
      isDone: this.fb.control(''),
      dateRealisation: this.fb.control(''),
      dureeRealisation: this.fb.control(''),
      statusTodo: this.fb.control(''),
      isImportant: this.fb.control(''),
      nomCompletUser: this.fb.control(''),
    })
  }

  //method addTache
  saveToDo(){

  }

}
