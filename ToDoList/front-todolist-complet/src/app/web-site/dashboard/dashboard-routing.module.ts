import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MaJourneeComponent } from './ma-journee/ma-journee.component';
import { ImportantComponent } from './important/important.component';
import { PlanifieComponent } from './planifie/planifie.component';
import { AffecteesMoiComponent } from './affectees-moi/affectees-moi.component';
import { TachesComponent } from './taches/taches.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



const routes: Routes = [
  {path:'', component:DashboardComponent, children:[
    {
      path:'maJournee',
      component: MaJourneeComponent
    },
    {
      path:'important',
      component: ImportantComponent
    },
    {
      path:'planifie',
      component: PlanifieComponent
    },
    {
      path:'affecteesMoi',
      component: AffecteesMoiComponent
    },
    {
      path:'taches',
      component: TachesComponent
    },
    {
      path:'portfolio',
      component: PortfolioComponent
    }
  ]
    
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
