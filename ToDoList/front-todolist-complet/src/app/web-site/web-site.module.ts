import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSiteComponent } from './web-site.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WebSiteRoutingModule } from './web-site-routing.module';




@NgModule({
  declarations: [
    WebSiteComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule
  ]
})
export class WebSiteModule { }
