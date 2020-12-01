import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeBottomSheetComponent } from './joke-bottom-sheet.component';

describe('JokeBottomSheetComponent', () => {
  let component: JokeBottomSheetComponent;
  let fixture: ComponentFixture<JokeBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
