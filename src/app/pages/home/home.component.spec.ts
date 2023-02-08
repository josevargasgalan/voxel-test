import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TVShowDetail } from 'src/app/models';
import { ApiService } from 'src/app/services';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: ApiService;

  const mockData: TVShowDetail[] = [{
    id: 1,
    name: 'name',
    image: {
      medium: 'medium',
      original: 'original'
    },
    rating: {
      average: 1
    }
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get TVShows', () => {
    spyOn(apiService, 'getTVShows').and.returnValue(of(mockData))
    component.ngOnInit();
    expect(component.tvShows).toEqual(mockData);
  })

  it('should get CardInfo', () => {
    expect(component.getCardInfo(mockData[0])).toEqual({
      title: mockData[0].name,
      image: mockData[0].image.medium,
      content: `Average: ${mockData[0].rating.average}`,
      clickAction: jasmine.any(Function)
    });
  })

  it('should set Average to zero when average is undefined', () => {
    mockData[0].rating.average = undefined!;
    expect(component.getCardInfo(mockData[0])).toEqual({
      title: mockData[0].name,
      image: mockData[0].image.medium,
      content: `Average: 0`,
      clickAction: jasmine.any(Function)
    });
  })
});
