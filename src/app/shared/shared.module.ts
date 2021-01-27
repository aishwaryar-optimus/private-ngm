import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiteFilterComponent } from './components/site-filter/site-filter.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { RouterModule } from '@angular/router';
import { ChartingComponent } from './components/charting/charting.component';
import { SearchComponent } from './components/search/search.component';
import { AlertComponent } from './components/alert/alert.component';
import { DataManagementComponent } from './components/data-management/data-management.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SiteFilterComponent,
    FeedbackComponent,
    ChartingComponent,
    SearchComponent,
    AlertComponent,
    DataManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SiteFilterComponent,
    FeedbackComponent,
    ChartingComponent
  ]
})
export class SharedModule { }
