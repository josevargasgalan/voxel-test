import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { AverageComponent } from './average.component';

describe('AverageComponent', () => {
  let component: AverageComponent;
  let fixture: ComponentFixture<AverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageComponent ],
      imports: [ MatIconModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageComponent);
    component = fixture.componentInstance;
    component.average = 7.9
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When we receive an average number we should set last star width and number of stars', () => {
    const array = Array.from({length: 7});
    component.ngOnChanges();
    expect(component.lastStarWidth).toBe('21.6px');
    expect(component.numberOfStars.length).toEqual(array.length);
  });
});
