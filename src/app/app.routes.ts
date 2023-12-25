import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: 'courses', component: CoursesComponent },
];
