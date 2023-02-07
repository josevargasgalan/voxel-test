import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AverageComponent {
  @Input('average') average: number = 0;

  lastStarWidth = '0px';
  numberOfStars = [];

  ngOnChanges(): void {
    const truncNumber = Math.trunc(this.average);
    this.lastStarWidth = this.getLastStarWidth(this.average, truncNumber);
    this.numberOfStars = this.getNumberOfStars(truncNumber);
  }

  private getLastStarWidth(fullNumber: number, truncedNumber: number): string {
    return 2.4 * ((fullNumber - truncedNumber) * 10) + 'px';
  }

  private getNumberOfStars(startsNumber: number): never[] {
    return Array.from({ length: startsNumber });
  }
}
