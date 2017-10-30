import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import {MdInputModule} from '@angular/material';



@Component({
  templateUrl: './start-landing.component.html',
  styleUrls: [ './start-landing.component.css' ]
})

export class StartLandingComponent {
  constructor(public dialog: MdDialog) {}

  openDialogLogin() {
    this.dialog.open(StartLandingDialogLogin);
  }
  openDialogSignup() {
    this.dialog.open(StartLandingDialogSignup);
  }
}
@Component({
  template: ` 
  <div class="row text-center">
    <div>
        <h1 md-card-title>Login here please!</h1>
    </div>    
    <md-input-container class="full-width">
        <input mdInput placeholder="Username" class="">
      </md-input-container>
      <div>
        <md-input-container class="full-width">
          <input mdInput type="password" placeholder="Passwort" class="">
        </md-input-container>
      </div>
      <div class="row">
        <div class="col">
          <md-checkbox>Remember me</md-checkbox>
        </div>
        <div class="col">
            <button md-button md-dialog-close [routerLink]="['/dashboard/main']">Login</button>
        </div>
      </div>
  </div>
  `
})
export class StartLandingDialogLogin {}

@Component({
  template: `   
  <div class="row text-center">
      <div>
          <h1 md-card-title>Welcome, Sign up!</h1>
      </div>
          <div>
            <md-input-container class="full-width">
              <input mdInput placeholder="First Name">
            </md-input-container>
          </div>
          <div>
            <md-input-container class="full-width">
              <input mdInput placeholder="Last Name">
            </md-input-container>
          </div>
          <div>
            <md-input-container class="full-width">
              <input mdInput type="email" placeholder="Email">
            </md-input-container>
          </div>
          <div>
            <md-input-container class="full-width">
              <input mdInput type="password" placeholder="Passwort">
            </md-input-container>
          </div>
          <div class="row">
            <div class="col">
              <md-checkbox>Remember me</md-checkbox>
            </div>
            <div class="col">
                <button md-button md-dialog-close [routerLink]="['/start/signup/first-service']">Signup</button>
            </div>
          </div>
      </div>
  `
})
export class StartLandingDialogSignup {}
