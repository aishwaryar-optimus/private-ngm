import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { SiteDashboardComponent } from './components/site-dashboard/site-dashboard.component';
import { SiteSummaryComponent } from './components/site-summary/site-summary.component';
import { SummaryTableComponent } from './components/site-summary/summary-table/summary-table.component';
import { ChannelTableComponent } from './components/site-summary/channel-table/channel-table.component';

const routes: Routes = [
  {
    path: '',
    component: SiteDashboardComponent
  },
  {
    path: 'add-site',
    component: AddSiteComponent
  },
  {
    path: 'site-summary',
    component: SiteSummaryComponent
  },
  {
    path: 'summary-table',
    component: SummaryTableComponent
  },
  {
    path: 'channel-table',
    component: ChannelTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteHomeRoutingModule {}
