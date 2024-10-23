import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebSiteComponent } from './web-site.component';
import { LoginComponent } from './login/login.component';
import { MaJourneeComponent } from './dashboard/ma-journee/ma-journee.component';
import { ImportantComponent } from './dashboard/important/important.component';
import { PlanifieComponent } from './dashboard/planifie/planifie.component';
import { AffecteesMoiComponent } from './dashboard/affectees-moi/affectees-moi.component';
import { TachesComponent } from './dashboard/taches/taches.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';



const routes: Routes = [
  {path:'', component:WebSiteComponent, children:[

    { path:'', redirectTo:'/login', pathMatch: 'full' },
    
    { path:'login', component: LoginComponent },

    { path:'maJournee', component: MaJourneeComponent },

    { path:'important', component: ImportantComponent },

    { path:'planifie', component: PlanifieComponent },

    { path:'affecteesMoi', component: AffecteesMoiComponent },

    { path:'taches', component: TachesComponent },

    { path:'portfolio', component: PortfolioComponent },

    { path:'**', redirectTo:'/login', pathMatch: 'full' },
  
  ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebSiteRoutingModule { }
