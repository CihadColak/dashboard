import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class JokeService {
  url = 'https://api.chucknorris.io/jokes/random'

  constructor(private http: HttpClient) {

  }

  getJoke() {
    return this.http.get(this.url);
  }
}
