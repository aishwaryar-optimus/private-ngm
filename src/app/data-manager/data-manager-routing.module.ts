import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDownloadComponent } from './components/data-download/data-download.component';

const routes: Routes = [{
    path: '',
    component: DataDownloadComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataManagerRoutingModule { }
