import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Route[] = [{
  path: '',
  component: HomeComponent
}]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class HomeModule {}
