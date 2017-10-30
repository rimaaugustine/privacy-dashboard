import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StartComponent } from './start.component';
import { StartLandingComponent, StartLandingDialogLogin, StartLandingDialogSignup } from './start-landing/start-landing.component';
import { StartGdprComponent } from './start-gdpr/start-gdpr.component';
import { StartSignupComponent } from './start-signup/start-signup.component';
import { StartLoginComponent } from './start-login/start-login.component';
import {StartFirstServiceComponent, StartAddServiceComponent} from './start-first-service/start-first-service.component';
import {FlashcardComponent} from './flashcard/flashcard.component';


import { StartRoutingModule } from './start-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdGridListModule } from '@angular/material';
import { MdInputModule, MdCheckboxModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MdlModule } from '@angular-mdl/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {MdSidenavModule} from '@angular/material';
import {MdDialogModule, MdChipsModule} from '@angular/material';
import {MdProgressBarModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';
import { StartAboutComponent } from './start-about/start-about.component';
import {FirstServiceFilterPipe} from '../dashboard/shared/first-service-filter.pipe';
import { StartSupportComponent } from './start-support/start-support.component';






@NgModule({
  imports: [
    CommonModule,
    StartRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdInputModule,
    NgbModule,
    FormsModule,
    MdlModule,
    MdCheckboxModule,
    Ng2PageScrollModule.forRoot(),
    MdSidenavModule,
    MdDialogModule,
    MdProgressBarModule,
    MdChipsModule,
    MdAutocompleteModule
  ],
  declarations: [
    StartComponent,
    StartLandingComponent,
    StartGdprComponent,
    StartSignupComponent,
    StartLoginComponent,
    StartLandingDialogLogin,
    StartLandingDialogSignup,
    FlashcardComponent,
    StartLandingDialogSignup,
    StartFirstServiceComponent,
    StartAddServiceComponent,
    StartAboutComponent,
    FirstServiceFilterPipe,
    StartSupportComponent
  ],
  entryComponents: [
    StartLandingDialogLogin,
    StartLandingDialogSignup,
    StartAddServiceComponent
  ]
})
export class StartModule {}

