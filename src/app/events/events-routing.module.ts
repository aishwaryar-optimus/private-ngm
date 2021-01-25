import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricalEventsComponent } from './components/historical-events/historical-events.component';

const routes: Routes = [{
    path: '',
    component: HistoricalEventsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
