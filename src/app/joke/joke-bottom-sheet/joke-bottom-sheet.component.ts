import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {JokeService} from '../joke.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-joke-bottom-sheet',
  templateUrl: './joke-bottom-sheet.component.html',
  styleUrls: ['./joke-bottom-sheet.component.css']
})
export class JokeBottomSheetComponent implements OnInit {
  joke = new Subject<string>();
  loading = false;

  constructor(private _bottomSheetRef: MatBottomSheetRef<JokeBottomSheetComponent>, private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJoke();
  }

  onNewJokeClick() {
    this.getJoke();
  }

  getJoke() {
    this.joke.next('');
    this.loading = true;
    this.jokeService.getJoke()
      .subscribe(data=> {
        this.joke.next(data.value)
        this.loading = false;
      })
  }
}
