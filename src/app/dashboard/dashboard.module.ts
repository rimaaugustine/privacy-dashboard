import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdGridListModule, MdTabsModule } from '@angular/material';
import { MdInputModule, MdSidenavModule,MdTooltipModule, MdPaginatorModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MdlModule } from '@angular-mdl/core';
import {HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {DashboardComponent} from './dashboard.component';
import { DashboardMainComponent, DashboardAddServiceComponent } from './dashboard-main/dashboard-main.component';
import { DashboardAddComponent, DashboardAddNewServiceComponent } from './dashboard-add/dashboard-add.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { DashboardServiceComponent } from './dashboard-service/dashboard-service.component';
import { DataExampleComponent } from './data-example/data-example.component';
import {MdDialogModule, MdChipsModule,MdListModule,MdRadioModule, MdCheckboxModule, MdSelectModule,MdSlideToggleModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


import { DashboardFacebookComponent, MessageDialog, DeleteDialog } from './dashboard-facebook/dashboard-facebook.component';
import { DashboardWhatsappComponent } from './dashboard-whatsapp/dashboard-whatsapp.component';
import { DashboardGoogleComponent } from './dashboard-google/dashboard-google.component';

import {MdTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';
import {ActivitiesService} from '../services/activities.service';
import {ConsentsService} from '../services/consents.service';
import {MessagesService} from '../services/messages.service';
import {ChangeRequestsService} from '../services/change-requests.service';
import {FacebookService} from '../services/facebook.service';
import {GoogleService} from '../services/google.service';
import {IconsService} from '../services/icons.service';
// import {WhatsappService} from './services/whatsapp.service';
import {FacebookMessagesService} from '../services/facebook-messages.service';
import {ServiceFilterPipe} from './shared/service-filter.pipe';
import { LikesService } from '../services/likes.service';

import { AgmCoreModule } from '@agm/core';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdInputModule,
    NgbModule,
    MdlModule,
    MdSidenavModule,
    MdTabsModule,
    ChartsModule,
    MdSidenavModule,
    MdDialogModule,
    NgxDatatableModule,
    HttpModule,
    MdTableModule,
    CdkTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFS_eqxaGMxBCA-pcjzWBI5eFhn5QEdrA'
    }),
    FormsModule,
    MdListModule,
    MdRadioModule,
    MdCheckboxModule,
    MdSelectModule,
    FlexLayoutModule,
    MdTooltipModule,
    MdSlideToggleModule,
    MdPaginatorModule
  ],
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
    DashboardAddComponent,
    DashboardSettingsComponent,
    DashboardServiceComponent,
    DataExampleComponent,
    DashboardServiceComponent,
    DashboardAddServiceComponent,
    DashboardServiceComponent,
    DashboardFacebookComponent,
    DashboardWhatsappComponent,
    DashboardGoogleComponent,
    DashboardAddServiceComponent,
    DashboardAddNewServiceComponent,
    ServiceFilterPipe,
    MessageDialog,
    DeleteDialog
  ],
  entryComponents: [
    DashboardAddServiceComponent,
    DashboardAddNewServiceComponent,
    MessageDialog,
    DeleteDialog
  ],
  providers: [
    ActivitiesService,
    ConsentsService,
    MessagesService,
    ChangeRequestsService,
    FacebookService,
    GoogleService,
    IconsService,
    FacebookMessagesService,
    LikesService
  ],
})
export class DashboardModule { }
