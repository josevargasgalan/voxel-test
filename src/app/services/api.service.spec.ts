import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TVShowDetail } from '../models';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('should return the number of TVShows passed', () => {
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
    spyOn(service, 'getTVShows').and.returnValue(of(mockData))
    service.getTVShows(1).subscribe(data => {
      expect(data).toEqual(mockData);
      expect(data.length).toBe(mockData.length)
    })
  })

  it('should return the TVShow by id', () => {
    const mockData: TVShowDetail = {
        name: 'name',
        image: {
          medium: 'medium',
          original: 'original'
        },
        rating: {
          average: 1
        },
        summary: 'summary',
        genres: ['comedy']
      };
    spyOn(service, 'getTVShowById').and.returnValue(of(mockData))
    service.getTVShowById(1).subscribe(data => {
      expect(data).toEqual(mockData);
    })
  })
})
