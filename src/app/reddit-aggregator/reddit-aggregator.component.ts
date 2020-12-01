import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit-aggregator',
  templateUrl: './reddit-aggregator.component.html',
  styleUrls: ['./reddit-aggregator.component.css']
})
export class RedditAggregatorComponent implements OnInit {

  subreddits = ['Programming', 'Worldnews', 'Coronavirus',  'Linux']


  constructor() { }

  ngOnInit(): void {
  }

}
