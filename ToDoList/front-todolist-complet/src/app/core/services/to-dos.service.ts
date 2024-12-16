import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../../web-site/models/ToDo';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { NewToDo } from '../../web-site/models/NewToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  constructor(private http: HttpClient) { 
  }

  //method getToDos
  //

  //method addToDo
  public saveToDo(newToDo: NewToDo): Observable<ToDo> {
    return this.http.post<ToDo>(environment.backendHost+"/todos/save", newToDo);
  }

}
