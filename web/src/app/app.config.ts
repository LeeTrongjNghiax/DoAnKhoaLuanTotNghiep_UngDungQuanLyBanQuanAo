import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { vi_VN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { API_CONFIG_TOKEN } from '../providers/api.provider';
import { API_CONFIG } from '../constants/api-config.constant';

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
    provideHttpClient(), 
    // {
    //   provide: HTTP_INTERCEPTORS, 
    //   useClass: ,
    //   multi: true, 
    // }, 
    {
      provide: API_CONFIG_TOKEN, 
      useValue: API_CONFIG, 
    }, 
  ]
};
