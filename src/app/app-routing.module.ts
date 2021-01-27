import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './core/components/forget-password/forget-password.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'forget-password',
        component: ForgetPasswordComponent,
    },
    {
        path: 'home',
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
    },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
