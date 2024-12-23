import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebSiteComponent } from './web-site.component';
import { LoginComponent } from '../auth/login/login.component';
import { MaJourneeComponent } from './dashboard/ma-journee/ma-journee.component';
import { ImportantComponent } from './dashboard/important/important.component';
import { PlanifieComponent } from './dashboard/planifie/planifie.component';
import { AffecteesMoiComponent } from './dashboard/affectees-moi/affectees-moi.component';
import { TachesComponent } from './dashboard/taches/taches.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { NewTacheComponent } from './dashboard/new-tache/new-tache.component';
import { RegisterComponent } from '../auth/register/register.component';




const routes: Routes = [
  {path:'', component:WebSiteComponent, children:[

    { path:'', redirectTo:'/register', pathMatch: 'full' },
    
    { path:'register', component: RegisterComponent },

    { path:'maJournee', component: MaJourneeComponent },

    { path:'important', component: ImportantComponent },

    { path:'planifie', component: PlanifieComponent },

    { path:'affecteesMoi', component: AffecteesMoiComponent },

    { path:'taches', component: TachesComponent },

    { path:'portfolio', component: PortfolioComponent },

    { path:'newTache', component: NewTacheComponent},

    { path:'**', redirectTo:'/register', pathMatch: 'full' },
  
  ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebSiteRoutingModule { }
