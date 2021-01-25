import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { SiteHomeRoutingModule } from './site-home-routing.module';
import { SiteDashboardComponent } from './components/site-dashboard/site-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { SiteConfigurationComponent } from './components/site-configuration/site-configuration.component';

@NgModule({
  declarations: [
    SiteDashboardComponent,
    AddSiteComponent,
    SiteConfigurationComponent
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
