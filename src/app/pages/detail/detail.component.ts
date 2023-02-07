import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services';
import { switchMap } from 'rxjs/operators';
import { Image, Rating, TVShowDetail } from 'src/app/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  tvShow: TVShowDetail = {
      name: '',
      image: {} as Image,
      rating: {} as Rating,
      genres: []
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTvShow();
  }

  public backToHomePage() {
    this.router.navigate(['/']);
  }


  private getTvShow() {
    this.activatedRoute.queryParams.pipe(
      switchMap(params => this.apiService.getTVShowById(params['id']),
    ))
    .subscribe(tvShow => {
      this.tvShow = tvShow;
    })
  }
}
