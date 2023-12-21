import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'second', component: SecondPageComponent },
];
