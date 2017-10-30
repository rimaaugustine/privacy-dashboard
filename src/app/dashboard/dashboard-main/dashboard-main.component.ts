import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent {
  title = 'Main Dashboard';
  selectedOption: string;
  constructor(public dialog: MdDialog) {
  }
  ServiceDialog() {
    let dialogRef = this.dialog.open(DashboardAddServiceComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}
@Component({
  selector: 'app-dashboard-dashboard-main',
  templateUrl: './dashboard-main-add-service.html',
})
export class DashboardAddServiceComponent {
  login: boolean = false;
  button: boolean = false;
  service: string;
  constructor(public dialogRef: MdDialogRef<DashboardAddServiceComponent>) {
  }

  showLogin(service): void {
    this.login = !this.login;
    this.button = !this.button;
    this.service = service;
  }

}
