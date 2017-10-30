import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StartModule } from './start/start.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdGridListModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { MdlModule } from '@angular-mdl/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MdSidenavModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StartModule,
    DashboardModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdToolbarModule,
    MdGridListModule,
    MdInputModule,
    NgbModule,
    FormsModule,
    MdlModule,
    FlexLayoutModule,
    MdSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
