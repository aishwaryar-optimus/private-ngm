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
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SiteFilterComponent,
    FeedbackComponent,
    ChartingComponent
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
export class SharedModule {}
