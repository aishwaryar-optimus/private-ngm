import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualDashboardComponent } from './components/visual-dashboard/visual-dashboard.component';

const routes: Routes = [{
    path: '',
    component: VisualDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualExplorerRoutingModule { }
