import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualExplorerRoutingModule } from './visual-explorer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VisualDashboardComponent } from './components/visual-dashboard/visual-dashboard.component';


@NgModule({
  declarations: [VisualDashboardComponent],
  imports: [
    CommonModule,
    VisualExplorerRoutingModule,
    SharedModule
  ]
})
export class VisualExplorerModule { }
