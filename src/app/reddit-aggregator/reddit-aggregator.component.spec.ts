import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditAggregatorComponent } from './reddit-aggregator.component';

describe('RedditAggregatorComponent', () => {
  let component: RedditAggregatorComponent;
  let fixture: ComponentFixture<RedditAggregatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditAggregatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditAggregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
