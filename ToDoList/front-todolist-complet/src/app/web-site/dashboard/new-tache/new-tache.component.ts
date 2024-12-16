import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDosService } from '../../../core/services/to-dos.service';

import { StatusToDo } from '../../enumerations/status-todo.enum';
import { NewToDo } from '../../models/NewToDo';

@Component({
  selector: 'app-new-tache',
  templateUrl: './new-tache.component.html',
  styleUrl: './new-tache.component.css'
})
export class NewTacheComponent implements OnInit {
  toDoFormGroup!: FormGroup;
  todoStatus : string[] = [];
  newToDo! : NewToDo;

  constructor(private fb: FormBuilder, 
              private toDoService: ToDosService){
  }

  ngOnInit(): void {
    /*
    for(let element in StatusToDo){
      let value = StatusToDo[element];
        this.todoStatus.push(value);
    }
    */

    this.toDoFormGroup = this.fb.group({
      dateCreation: this.fb.control(''),
      nomToDo: this.fb.control(''),
      estimation: this.fb.control(''),
      isDone: this.fb.control('True'),
      dateRealisation: this.fb.control(''),
      dureeRealisation: this.fb.control(''),
      statusTodo: this.fb.control(StatusToDo.Done),
      isImportant: this.fb.control('False'),
      nomCompletUser: this.fb.control('Elkanoun Mohamed')
    })
  }

  //method addTache
  saveToDo(){
    console.log(this.toDoFormGroup.value);
    
    this.newToDo = ({
      'dateCreation': new Date(this.toDoFormGroup.value.dateCreation),
      'nomToDo': this.toDoFormGroup.value.nomToDo,
      'estimation': this.toDoFormGroup.value.estimation,
      'isDone': this.toDoFormGroup.value.isDone,
      'dateRealisation': new Date(this.toDoFormGroup.value.dateRealisation),
      'dureeRealisation': this.toDoFormGroup.value.dureeRealisation,
      'statusTodo': this.toDoFormGroup.value.statusTodo,
      'isImportant': this.toDoFormGroup.value.isImportant,
      'nomCompletUser': this.toDoFormGroup.value.nomCompletUser
    })
    

    this.toDoService.saveToDo(this.newToDo).subscribe({
      next : data => {
        console.log("toDo ajouté avec succés!")
      },
      error : err => {
        console.log(err);
      }
    })
  }



}
