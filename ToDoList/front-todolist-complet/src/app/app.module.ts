import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WebSiteComponent } from './web-site/web-site.component';
import { LayoutComponent } from './web-site/layout/layout.component';
import { LoginComponent } from './web-site/login/login.component';
import { HomeComponent } from './web-site/home/home.component';
import { DashboardComponent } from './web-site/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    WebSiteComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
