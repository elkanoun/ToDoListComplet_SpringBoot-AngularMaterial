import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebSiteComponent } from './web-site.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'', component:WebSiteComponent, children:[
    {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
    },
    {
      path:'dashboard',
      component: DashboardComponent
      
    },
    {
      path:'home',
      component: HomeComponent
    },
    {
      path:'login',
      component: LoginComponent
    }
  ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebSiteRoutingModule { }
