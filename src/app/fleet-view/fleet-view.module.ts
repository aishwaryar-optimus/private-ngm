import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetViewRoutingModule } from './fleet-view-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    FleetViewRoutingModule,
    SharedModule
  ]
})
export class FleetViewModule { }
