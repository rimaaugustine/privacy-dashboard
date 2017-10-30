import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start.component';
import {StartGdprComponent} from './start-gdpr/start-gdpr.component';
import {StartLandingComponent} from './start-landing/start-landing.component';
import {StartLoginComponent} from './start-login/start-login.component';
import {StartSignupComponent} from './start-signup/start-signup.component';
import {FlashcardComponent} from './flashcard/flashcard.component';
import {StartFirstServiceComponent} from './start-first-service/start-first-service.component';
import {StartAboutComponent} from './start-about/start-about.component';
import {StartSupportComponent} from './start-support/start-support.component';

const routes: Routes = [
  {
    path: 'start',
    redirectTo: '/start/landing',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent,
    children: [
      {
        path: 'landing',
        component: StartLandingComponent
      },
      {
        path: 'gdpr',
        component: StartGdprComponent
      },
      {
        path: 'login',
        component: StartLoginComponent
      },
      {
        path: 'signup',
        component: StartSignupComponent
      },
      {
        path: 'signup/flashcard',
        component: FlashcardComponent
      },
      {
        path: 'signup/first-service',
        component: StartFirstServiceComponent
      },
      {
        path: 'about',
        component: StartAboutComponent
      },
      {
        path: 'support',
        component: StartSupportComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule {
}
