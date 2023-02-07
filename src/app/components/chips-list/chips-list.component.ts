import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chips-list',
  templateUrl: './chips-list.component.html',
  styleUrls: ['./chips-list.component.scss']
})
export class ChipsListComponent {
  @Input('chipsList') chipsList: string [] = [];
}
