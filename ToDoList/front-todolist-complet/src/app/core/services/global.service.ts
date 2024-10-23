import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) {
   }

  //method getRessource
  public getRessource(url:any){
    return this.http.get(url);
  }

  //method postRessource
  public postRessource(url:any, data: any){
    return this.http.post(url, data);
  }
}
