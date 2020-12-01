import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RedditPostsObjectModel} from './redditPostsObject.model';

@Injectable({providedIn: 'root'})
export class RedditService {
  baseUrl = 'https://www.reddit.com/r/';
  baseSuffix = '/hot/.json?count=20'
  loading = false;


  constructor(private http: HttpClient) {
  }


  getTopPosts(subredditName: string) {
    let url = this.baseUrl + subredditName + this.baseSuffix;
    return this.http.get<RedditPostsObjectModel>(url);
  }
}
