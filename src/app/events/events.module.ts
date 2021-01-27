import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventsRoutingModule } from './events-routing.module';
import { HistoricalEventsComponent } from './components/historical-events/historical-events.component';
import { SharedModule } from '../shared/shared.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HistoricalEventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class EventsModule {}
