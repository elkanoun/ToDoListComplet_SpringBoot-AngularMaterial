import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSiteComponent } from './web-site.component';
//import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from '../shared/login/login.component';

import { WebSiteRoutingModule } from './web-site-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { MaJourneeComponent } from './dashboard/ma-journee/ma-journee.component';
import { ImportantComponent } from './dashboard/important/important.component';
import { PlanifieComponent } from './dashboard/planifie/planifie.component';
import { AffecteesMoiComponent } from './dashboard/affectees-moi/affectees-moi.component';
import { TachesComponent } from './dashboard/taches/taches.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { LayoutComponent } from '../shared/layout/layout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NewTacheComponent } from './dashboard/new-tache/new-tache.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';








@NgModule({
  declarations: [
    WebSiteComponent,
    LayoutComponent,
    LoginComponent,
    MaJourneeComponent,
    ImportantComponent,
    PlanifieComponent,
    AffecteesMoiComponent,
    TachesComponent,
    PortfolioComponent,
    NewTacheComponent
    
   
    
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatPaginator,
    MatSort,
    MatDatepickerModule, MatNativeDateModule,
    MatRadioModule,
    MatSelectModule

 
    

    
  ],
  providers: [
  ]
})
export class WebSiteModule { }
