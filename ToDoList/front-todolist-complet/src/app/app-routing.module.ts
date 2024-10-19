import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebSiteComponent } from './web-site/web-site.component';

const routes: Routes = [
  {
    path:'', children:[
      {path:'web-site', component: WebSiteComponent}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
