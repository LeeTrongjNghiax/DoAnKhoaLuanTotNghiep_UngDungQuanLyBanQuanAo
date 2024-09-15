import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginComponent } from './modules/login/login.component';
import { EmailInputComponent } from './modules/email-input/email-input.component';
import { OtpInputComponent } from './modules/otp-input/otp-input.component';

export const routes: Routes = [
  {
    path: 'otp-input', 
    component: OtpInputComponent, 
  }, 
  {
    path: 'email-input', 
    component: EmailInputComponent, 
  }, 
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
