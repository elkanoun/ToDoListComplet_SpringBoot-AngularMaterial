import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSiteComponent } from './web-site.component';


import { WebSiteRoutingModule } from './web-site-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { MaJourneeComponent } from './dashboard/ma-journee/ma-journee.component';
import { ImportantComponent } from './dashboard/important/important.component';
import { PlanifieComponent } from './dashboard/planifie/planifie.component';
import { AffecteesMoiComponent } from './dashboard/affectees-moi/affectees-moi.component';
import { TachesComponent } from './dashboard/taches/taches.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { NewTacheComponent } from './dashboard/new-tache/new-tache.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';







@NgModule({
  declarations: [
    WebSiteComponent,
    LayoutComponent,
    MaJourneeComponent,
    ImportantComponent,
    PlanifieComponent,
    AffecteesMoiComponent,
    TachesComponent,
    PortfolioComponent,
    NewTacheComponent,

    RegisterComponent,
    LoginComponent

    
    
   
    
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule,
    HttpClientModule,

    MaterialModule

 
    

    
  ],
  providers: [
    //provideAnimationsAsync()
  ]
})
export class WebSiteModule { }
