import { Routes } from '@angular/router';
import { Privacy } from './privacy/privacy';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
  { path: 'Privacy', component: Privacy },
  { path: 'AboutUs', component: AboutUs },
  {path: '', redirectTo: '/Home', pathMatch: 'full' }
];
