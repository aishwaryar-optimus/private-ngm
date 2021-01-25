import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { SiteDashboardComponent } from './components/site-dashboard/site-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SiteDashboardComponent
  },
  {
    path: 'add-site',
    component: AddSiteComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteHomeRoutingModule { }
