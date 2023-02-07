import { Component, Input } from '@angular/core';
import { CardInfo } from './models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('cardInfo') cardInfo: CardInfo = {
    title: '',
    image: '',
    content: '',
    clickAction: () => {}
  };

  launchClickAction(): void {
    this.cardInfo.clickAction();
  }
}
