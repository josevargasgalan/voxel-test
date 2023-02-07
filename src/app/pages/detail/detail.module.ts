import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DetailComponent } from './detail.component';
import { Route, RouterModule } from '@angular/router';
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
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class DetailModule { }
