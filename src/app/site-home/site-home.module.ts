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
import { AddSiteStepOneComponent } from './components/add-site-step-one/add-site-step-one.component';
import { AddSiteStepTwoComponent } from './components/add-site-step-two/add-site-step-two.component';

@NgModule({
  declarations: [
    SiteDashboardComponent,
    AddSiteComponent,
    SiteConfigurationComponent,
    SiteSummaryComponent,
    AddSiteStepOneComponent,
    AddSiteStepTwoComponent
  ],
  imports: [
    CommonModule,
    SiteHomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SiteHomeModule { }
