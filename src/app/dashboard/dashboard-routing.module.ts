import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashboardMainComponent} from './dashboard-main/dashboard-main.component';
import {DashboardAddComponent} from './dashboard-add/dashboard-add.component';
import {DashboardSettingsComponent} from './dashboard-settings/dashboard-settings.component';
import { DashboardFacebookComponent } from './dashboard-facebook/dashboard-facebook.component';
import { DashboardWhatsappComponent } from './dashboard-whatsapp/dashboard-whatsapp.component';
import { DashboardGoogleComponent } from './dashboard-google/dashboard-google.component';
import {DataExampleComponent} from "./data-example/data-example.component";

const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: '/dashboard/main',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'main',
        component: DashboardMainComponent
      },
      {
        path: 'add',
        component: DashboardAddComponent
      },
      {
        path: 'settings',
        component: DashboardSettingsComponent
      },
      {
        path: 'facebook',
        component: DashboardFacebookComponent,

      },
      {
        path: 'google',
        component: DashboardGoogleComponent
      },
      {
        path: 'whatsapp',
        component: DashboardWhatsappComponent
      },
      {
        path: 'data-example',
        component: DataExampleComponent
      },
      // {
      //   path: 'gdpr',
      //   component: StartGdprComponent
      // },
      // {
      //   path: 'login',
      //   component: StartLoginComponent
      // },
      // {
      //   path: 'signup',
      //   component: StartSignupComponent
      // }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
