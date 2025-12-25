import { Routes } from '@angular/router';
import { Privacy } from './privacy/privacy';
import { AboutUs } from './about-us/about-us';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'Privacy', component: Privacy },
  { path: 'AboutUs', component: AboutUs },
  { path: '', component: Home },
  { path: '**', component: PageNotFound }
];
