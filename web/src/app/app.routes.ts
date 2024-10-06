import { Routes } from '@angular/router';

import { LandingComponent } from './modules/landing/landing.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginComponent } from './modules/login/login.component';
import { EmailInputComponent } from './modules/email-input/email-input.component';
import { OtpInputToResetPasswordComponent } from './modules/otp-input-to-reset-password/otp-input-to-reset-password.component';
import { ForgotPasswordInputComponent } from './modules/forgot-password-input/forgot-password-input.component';
import { OtpInputToSignUpComponent } from './modules/otp-input-to-sign-up/otp-input-to-sign-up.component';
import { ProductItemDetailComponent } from './modules/landing/components/product-list/components/product-item/components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './modules/landing/components/product-list/product-list.component';
import { CartComponent } from './modules/cart/cart.component';

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
    path: 'product-list', 
    component: ProductListComponent, 
  }, 
  {
    path: 'product-item-detail', 
    component: ProductItemDetailComponent, 
  }, 
  {
    path: 'cart', 
    component: CartComponent, 
  }, 
  {
    path: '', 
    component: LandingComponent, 
  }, 
];
