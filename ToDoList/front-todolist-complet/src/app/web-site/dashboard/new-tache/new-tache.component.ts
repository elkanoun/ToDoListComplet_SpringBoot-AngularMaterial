import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDosService } from '../../../auth/services/to-dos.service';
import { NewToDo } from '../../models/NewToDo';
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
      if(typeof value === 'string'){
        this.todoStatus.push(value);
      }
        
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
      nomCompletUser: this.fb.control('')
    })
  }

  //method addTache
  saveToDo(){
    console.log(this.toDoFormGroup.value);

    let dateCreation = new Date(this.toDoFormGroup.value.dateCreation);
    //let formattedDateCreation = dateCreation.getFullYear()+"/"+(dateCreation.getMonth()+1)+"/"+dateCreation.getDate();
    

    let dateRealisation = new Date(this.toDoFormGroup.value.dateRealisation);
    //let formattedDateRealisation = dateCreation.getFullYear()+"/"+(dateCreation.getMonth()+1)+"/"+dateCreation.getDate();
    
    let formData : NewToDo = ({
      'dateCreation': dateCreation,
      'nomToDo': this.toDoFormGroup.value.nomToDo,
      'estimation': this.toDoFormGroup.value.estimation,
      'isDone': this.toDoFormGroup.value.isDone,
      'dateRealisation': dateRealisation,
      'dureeRealisation': this.toDoFormGroup.value.dureeRealisation,
      'statusTodo': this.toDoFormGroup.value.statusTodo,
      'isImportant': this.toDoFormGroup.value.isImportant,
      'nomCompletUser': this.toDoFormGroup.value.nomCompletUser
    })
    

    this.toDoService.saveToDo(formData).subscribe({
      next : data => {
        console.log("toDo ajouté avec succés!")
      },
      error : err => {
        console.log(formData);
        console.log(err);
      }
    })
      

  }
    



}
