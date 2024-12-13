import { Routes } from '@angular/router';

import { LandingComponent } from './modules/landing/landing.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginComponent } from './modules/login/login.component';
import { EmailInputComponent } from './modules/email-input/email-input.component';
import { OtpInputToResetPasswordComponent } from './modules/otp-input-to-reset-password/otp-input-to-reset-password.component';
import { ForgotPasswordInputComponent } from './modules/forgot-password-input/forgot-password-input.component';
import { OtpInputToSignUpComponent } from './modules/otp-input-to-sign-up/otp-input-to-sign-up.component';
import { CartComponent } from './modules/cart/cart.component';
import { NewsComponent } from './modules/news/news.component';
import { NewItemDetailComponent } from './modules/news/components/new-item/components/new-item-detail/new-item-detail.component';
import { ProductItemDetailComponent } from './modules/product-item-detail/product-item-detail.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ProfileInfoComponent } from './modules/profile/components/profile-info/profile-info.component';
import { OrderHistoryComponent } from './modules/profile/components/order-history/order-history.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { UserInfoComponent } from './modules/checkout/components/user-info/user-info.component';
import { DeliveryInfoComponent } from './modules/checkout/components/delivery-info/delivery-info.component';
import { PaymentInfoComponent } from './modules/checkout/components/payment-info/payment-info.component';
import { OrderStatusComponent } from './modules/profile/components/order-status/order-status.component';

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
    path: 'product-list/:id', 
    component: ProductListComponent, 
  }, 
  {
    path: 'product-list', 
    component: ProductListComponent, 
  }, 
  {
    path: 'product-list/product-item-detail/:id', 
    component: ProductItemDetailComponent, 
  }, 
  {
    path: 'cart', 
    component: CartComponent, 
  }, 
  {
    path: 'checkout', 
    component: CheckoutComponent, 
  }, 
  {
    path: 'profile', 
    component: ProfileComponent, 
    children: [
      {
        path: 'profile-info', 
        component: ProfileInfoComponent, 
      }, 
      {
        path: 'order-status', 
        component: OrderStatusComponent, 
      }, 
    ]
  }, 
  {
    path: 'news', 
    component: NewsComponent, 
    children: [
    ]
  }, 
  {
    path: 'news/:id', 
    component: NewItemDetailComponent, 
  }, 
  {
    path: '', 
    component: LandingComponent, 
  }, 
];
