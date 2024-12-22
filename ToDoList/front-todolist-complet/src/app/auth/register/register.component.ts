import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  userFormGroup!: FormGroup;

  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
      confirmedPassword: this.fb.control('')
    })
  }

  //method register
  register(){

  }

}
