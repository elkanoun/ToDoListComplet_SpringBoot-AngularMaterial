import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './web-site/layout/layout.component';
import { WebSiteComponent } from './web-site/web-site.component';

const routes: Routes = [
  {
    path:'website', 
    loadChildren: () => import('./web-site/web-site.module').then(m => m.WebSiteModule)
 }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
