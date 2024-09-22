import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { vi_VN, provideNzI18n } from 'ng-zorro-antd/i18n';

import { routes } from './app.routes';
import { AuthenticateInterceptor } from './core/interceptors/authenticate.interceptor';
import { API_CONFIG } from '../constants/api-config.constant';
import { API_CONFIG_TOKEN } from '../providers/api.provider';

registerLocaleData(vi);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideHttpClient(), 
    provideAngularSvgIcon(), 
    provideNzI18n(vi_VN), 
    importProvidersFrom(FormsModule), 
    provideAnimationsAsync(), 
    provideHttpClient(withInterceptorsFromDi()), 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthenticateInterceptor,
      multi: true, 
    }, 
    {
      provide: API_CONFIG_TOKEN, 
      useValue: API_CONFIG, 
    }, 
  ]
};
