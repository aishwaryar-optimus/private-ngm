import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataManagerRoutingModule } from './data-manager-routing.module';
import { DataDownloadComponent } from './components/data-download/data-download.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DataDownloadComponent],
  imports: [
    CommonModule,
    DataManagerRoutingModule,
    SharedModule
  ]
})
export class DataManagerModule { }
