import {Component, Input, OnInit} from '@angular/core';
import {RedditService} from '../reddit.service';
import {NewsObjectModel} from '../redditPostsObject.model';

export interface News {
  title: string;
  link: string;

}

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  @Input() name: string = '';
  news: NewsObjectModel[] = [];
  loading = false;

  constructor(private redditService: RedditService) {
  }

  ngOnInit(): void {
    this.redditService.getTopPosts(this.name)
      .subscribe(data => {
        this.loading = true;
        // check if first post is sticky
        const firstTitle = data.data.children[0].data.title;
        const firstLink = data.data.children[0].data.url_overridden_by_dest;
        let firstObject: NewsObjectModel = {
          title: firstTitle,
          url_overridden_by_dest: firstLink
        }
        if (!firstTitle.includes('Weekly') &&
          !firstTitle.includes('Daily') &&
          !firstTitle.includes('Discussion')) {
         this.news.push(firstObject);
        }

        for (let i = 1; i < 12; i++) {
          const currentTitle = data.data.children[i].data.title
          const currentLink = data.data.children[i].data.url_overridden_by_dest;
          let currentObject: NewsObjectModel = {
            title: currentTitle,
            url_overridden_by_dest: currentLink
          }
          this.news.push(currentObject);
        }
        this.loading = false;
      })
  }

  showInfo() {

  }
}
