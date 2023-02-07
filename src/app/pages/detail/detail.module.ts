import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DetailComponent } from './detail.component';
import { Route, RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips'
import { CommonModule } from '@angular/common';
import { AverageComponent } from 'src/app/components/average/average.component';

const routes: Route[] = [{
  path: '',
  component: DetailComponent
}]

@NgModule({
  declarations: [
    DetailComponent,
    AverageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class DetailModule { }
