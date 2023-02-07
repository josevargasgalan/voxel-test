import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Route[] = [{
  path: '',
  component: DetailComponent
}]

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class DetailModule { }
