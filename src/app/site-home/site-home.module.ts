import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SiteHomeRoutingModule } from './site-home-routing.module';
import { SiteDashboardComponent } from './components/site-dashboard/site-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { SiteConfigurationComponent } from './components/site-configuration/site-configuration.component';
import { SiteSummaryComponent } from './components/site-summary/site-summary.component';
import { SummaryTableComponent } from './components/site-summary/summary-table/summary-table.component';
import { ChannelTableComponent } from './components/site-summary/channel-table/channel-table.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    SiteDashboardComponent,
    AddSiteComponent,
    SiteConfigurationComponent,
    SiteSummaryComponent,
    SummaryTableComponent,
    ChannelTableComponent
  ],
  imports: [
    CommonModule,
    SiteHomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class SiteHomeModule {}
