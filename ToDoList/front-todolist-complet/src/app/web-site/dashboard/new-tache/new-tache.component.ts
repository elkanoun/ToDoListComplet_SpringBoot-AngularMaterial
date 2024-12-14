import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-tache',
  templateUrl: './new-tache.component.html',
  styleUrl: './new-tache.component.css'
})
export class NewTacheComponent implements OnInit {
  toDoForm!: FormGroup;

  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.toDoForm = this.fb.group({
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

}
