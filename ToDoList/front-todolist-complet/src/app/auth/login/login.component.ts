import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm! : FormGroup;
  
  

  constructor(private fb:FormBuilder,
             private router:Router, 
             private svcAuth:AuthService){
  }
  
  //ngOnInit
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    }) 
  }
  

  //method login()
  login(){
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
  }

}
