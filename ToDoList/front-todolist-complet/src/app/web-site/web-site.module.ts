import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSiteComponent } from './web-site.component';
//import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

import { WebSiteRoutingModule } from './web-site-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MaJourneeComponent } from './dashboard/ma-journee/ma-journee.component';
import { ImportantComponent } from './dashboard/important/important.component';
import { PlanifieComponent } from './dashboard/planifie/planifie.component';
import { AffecteesMoiComponent } from './dashboard/affectees-moi/affectees-moi.component';
import { TachesComponent } from './dashboard/taches/taches.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { LayoutComponent } from './layout/layout.component';





@NgModule({
  declarations: [
    WebSiteComponent,
    LoginComponent,
    MaJourneeComponent,
    ImportantComponent,
    PlanifieComponent,
    AffecteesMoiComponent,
    TachesComponent,
    PortfolioComponent,
    LayoutComponent
   
    
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule

    
  ],
  providers: [

  ]
})
export class WebSiteModule { }
