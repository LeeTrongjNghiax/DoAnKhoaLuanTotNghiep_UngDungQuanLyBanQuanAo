import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [
  {
    path: 'sign-up', 
    component: SignUpComponent, 
  }, 
  {
    path: 'login', 
    component: LoginComponent, 
  }, 
  {
    path: '', 
    component: LandingComponent, 
  }
];
