import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { TVShow, TVShowDetail } from "../models";

@Injectable()
export class ApiService {
  private BASE_URL = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) {}

  public getTVShows(numberOfShows: number): Observable<TVShowDetail[]> {
    return this.http.get<TVShow[]>(`${this.BASE_URL}/search/shows?q=show`).pipe(
      map((tvShows: TVShow[]) => {
        return tvShows.slice(0, numberOfShows).map(tvShow => ({
          id: tvShow.show.id,
          name: tvShow.show.name,
          image: tvShow.show.image,
          rating: tvShow.show.rating
        }));
      })
    );
  }


  public getTVShowById(id: number): Observable<TVShowDetail> {
    return this.http.get<TVShowDetail>(`${this.BASE_URL}/shows/${id}`).pipe(
      map((tvShow: TVShowDetail) => {
        const rex = /(<([^>]+)>)/ig;
        return {
          name: tvShow.name,
          image: tvShow.image,
          rating: tvShow.rating,
          summary: tvShow.summary?.replace(rex, ''),
          genres: tvShow.genres
        }
      })
    );
  }
}
