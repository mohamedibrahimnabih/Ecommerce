import { Routes } from '@angular/router';
import { Privacy } from './privacy/privacy';
import { AboutUs } from './about-us/about-us';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Reister } from './reister/reister';
import { Login } from './login/login';
import { Information } from './information/information';
import { Vision } from './vision/vision';
import { ProdctDetail } from './prodct-detail/prodct-detail';

export const routes: Routes = [
  { path: '', component: Home },
  
  { path: 'Privacy', component: Privacy },
  { path: 'AboutUs', component: AboutUs,
    children: [
      {
        path: '',
        redirectTo: 'Information',
        pathMatch: 'full'
      },
      {
        path: 'Information', 
        component: Information
      }
      ,{
        path: 'Vision', 
        component: Vision
      }
      
    ]
   },
  { path: 'Register', component: Reister },
  { path: 'Login', component: Login },
  { path: 'Product/:id', component: ProdctDetail },
  
  { path: '**', component: PageNotFound },
];
