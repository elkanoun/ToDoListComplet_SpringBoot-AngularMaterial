import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';


@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css'
})
export class TachesComponent implements OnInit {
  public displayedColumns: string[]=['id','dateCreation','nomToDo','estimation','isDone','dateRealisation','dureeRealisation','statusTodo','isImportant','nomCompletUser'];
  public dataSource: any;
  public todos: any;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  
  

  constructor(private http:HttpClient, private router:Router){

  }
  
  //ngOnInit
  ngOnInit(): void {
    this.http.get("http://localhost:8080/todos")
    .subscribe({
      next : data => {
        this.todos = data;
        this.dataSource = new MatTableDataSource(this.todos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error : err  => {
        console.log(err);
      }
  });
    
  }

  //method addTache
  addTache(){
    this.router.navigateByUrl("/newTache");
  }
  
  

}
