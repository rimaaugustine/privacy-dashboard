import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MessagesService {
  source = 'assets/data/messages/messages.json';

  constructor(private http: Http) {
  }

  getAllMessages() {
    return this.http
      .get(this.source)
      .map(res => res.json());
  }

  getFacebookMessages() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.From === 'Facebook'));
  }

  getGoogleMessages() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.From === 'Google'));
  }

  getWhatsAppMessages() {
    return this.http
      .get(this.source)
      .map(res => res.json().filter(data => data.From === 'WhatsApp'));
  }

}
