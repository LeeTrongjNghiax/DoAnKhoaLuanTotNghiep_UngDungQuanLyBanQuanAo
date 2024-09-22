import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginComponent } from './modules/login/login.component';
import { EmailInputComponent } from './modules/email-input/email-input.component';
import { OtpInputToResetPasswordComponent } from './modules/otp-input-to-reset-password/otp-input-to-reset-password.component';
import { ForgotPasswordInputComponent } from './modules/forgot-password-input/forgot-password-input.component';
import { OtpInputToSignUpComponent } from './modules/otp-input-to-sign-up/otp-input-to-sign-up.component';

export const routes: Routes = [
  {
    path: 'otp-input-to-sign-up', 
    component: OtpInputToSignUpComponent, 
  }, 
  {
    path: 'otp-input-to-reset-password', 
    component: OtpInputToResetPasswordComponent, 
  }, 
  {
    path: 'forgot-password-input', 
    component: ForgotPasswordInputComponent, 
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
