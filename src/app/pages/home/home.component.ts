import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardInfo } from 'src/app/components/card/models';
import { TVShowDetail } from '../../models';
import { ApiService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tvShows: TVShowDetail[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getTVShows(6).subscribe(tvShows => {
      this.tvShows = tvShows;
    })
  }

  public getCardInfo(tvShow: TVShowDetail): CardInfo {
    return {
      title: tvShow.name,
      image: tvShow.image.medium,
      content: `Average: ${tvShow.rating.average || 0}`,
      clickAction: () => this.router.navigate([`/detail`], {queryParams: { id: tvShow.id }})
    }
  }
}
