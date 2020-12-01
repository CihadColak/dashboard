import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {JokeBottomSheetComponent} from './joke-bottom-sheet/joke-bottom-sheet.component';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  onJokeClick() {
    this._bottomSheet.open(JokeBottomSheetComponent)
  }
}
