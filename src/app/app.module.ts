import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RedditAggregatorComponent } from './reddit-aggregator/reddit-aggregator.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SubredditComponent } from './reddit-aggregator/subreddit/subreddit.component';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { JokeComponent } from './joke/joke.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { JokeBottomSheetComponent } from './joke/joke-bottom-sheet/joke-bottom-sheet.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RedditAggregatorComponent,
    SubredditComponent,
    JokeComponent,
    JokeBottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
