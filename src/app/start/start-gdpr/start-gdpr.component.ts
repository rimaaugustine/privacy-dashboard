import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'start-gdpr',
  templateUrl: './start-gdpr.component.html',
  styleUrls: [ './start-gdpr.component.css' ]
})

export class StartGdprComponent {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<start-login></start-login>`
})
export class DialogOverviewExampleDialog {}
