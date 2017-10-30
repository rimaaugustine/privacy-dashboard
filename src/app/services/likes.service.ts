import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LikesService {
  source = 'assets/data/facebook/likes.json';

  constructor(private http: Http) {
  }

  getAllLikes() {
    return this.http
      .get(this.source)
      .map(res => res.json());
  }
}
