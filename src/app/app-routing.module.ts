import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'fleet-view',
        loadChildren: () => import('./fleet-view/fleet-view.module').then(m => m.FleetViewModule)
    },
    {
        path: 'site-home',
        loadChildren: () => import('./site-home/site-home.module').then(m => m.SiteHomeModule)
    },
    {
        path: 'visual-explorer',
        loadChildren: () => import('./visual-explorer/visual-explorer.module').then(m => m.VisualExplorerModule)
    },
    {
        path: 'events',
        loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
    },
    {
        path: 'data-manager',
        loadChildren: () => import('./data-manager/data-manager.module').then(m => m.DataManagerModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
