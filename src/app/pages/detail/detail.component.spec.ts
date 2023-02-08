import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/services';

import { DetailComponent } from './detail.component';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  const mockActivatedRoute = {
    queryParams: of({})
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatIconModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        ApiService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to detail page', inject([Router], (mockRouter: Router) =>  {
    const spy = spyOn(mockRouter, 'navigate').and.stub();
    component.backToHomePage();
    const url = spy.calls.first().args[0];
    expect(url).toContain('/');
  }));
});
