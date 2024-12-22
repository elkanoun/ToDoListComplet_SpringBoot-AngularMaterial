import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  host: string = 'http://localhost:8080';
  users: any;

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
    this.users = [{
      admin: {'password':123, 'role':'ADMIN'},
      user1: {'password':456, 'role':'USER'},
    }]
  }

  //login
  login(username:any, password:any): boolean{
    
    return false;
  }

  //logOut
  logOut(){

  }


}
