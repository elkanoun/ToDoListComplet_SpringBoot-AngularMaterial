import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForm } from '../models/UserForm';
import { Observable } from 'rxjs';
import { AppUser } from '../models/AppUser';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
  }

  //register
  registerUser(formData: UserForm, headers: []): Observable<AppUser>{
    return this.http.post<AppUser>(environment.backendHost+"/register/", formData, headers);
  }

  //login
  login(username:any, password:any): boolean{
    
    return false;
  }

  //logOut
  logOut(){

  }


}
