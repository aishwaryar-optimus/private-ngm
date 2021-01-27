import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetViewRoutingModule } from './fleet-view-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';

// Components, Services and Constants
import { MAP_CONFIG } from '../shared/configs/map-api';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    FleetViewRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: MAP_CONFIG.apiKey
    })
  ]
})
export class FleetViewModule { }
