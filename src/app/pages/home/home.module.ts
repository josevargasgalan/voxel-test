import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../../components/card/card.component';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Route[] = [{
  path: '',
  component: HomeComponent
}]

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class HomeModule {}
