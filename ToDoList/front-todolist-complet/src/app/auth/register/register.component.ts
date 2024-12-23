import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserForm } from '../models/UserForm';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  userFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private http: HttpClient){
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
    let formData: UserForm = {
      'username': this.userFormGroup.value.username,
      'password': this.userFormGroup.value.password,
      'confirmedPassword': this.userFormGroup.value.confirmedPassword
    }

    //Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,authorization
    const headers = new HttpHeaders({
      'Origin': "http://localhost:4200/",
      'Content-Type': "application/json"
    });
    
      
    

    this.authService.registerUser(formData, { headers }).subscribe({
      next: data => {
        alert('user ajouté avec succés!');
      },
      error: err => {
        console.log(formData);
        console.log(err);
      }
    })
  }

}
