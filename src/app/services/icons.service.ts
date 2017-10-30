import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Icons } from '../dashboard/shared/Icons';

@Injectable()
export class IconsService {
  source = 'assets/data/add-service/icons.json';
  constructor(private http: Http) {
  }

  /**
   * Load services from the static icons.json data, usually an API URL.
   *
   * @return {Observable<Icons[]>} A list of services.
   */
  getIcons(): Observable<Icons[]> {
    return this.http.get(this.source)
      .map(res => res.json());
  }
}
