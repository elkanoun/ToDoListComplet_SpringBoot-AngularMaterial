import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaJourneeComponent } from './ma-journee/ma-journee.component';
import { ImportantComponent } from './important/important.component';
import { PlanifieComponent } from './planifie/planifie.component';
import { AffecteesMoiComponent } from './affectees-moi/affectees-moi.component';
import { TachesComponent } from './taches/taches.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MaJourneeComponent,
    ImportantComponent,
    PlanifieComponent,
    AffecteesMoiComponent,
    TachesComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
