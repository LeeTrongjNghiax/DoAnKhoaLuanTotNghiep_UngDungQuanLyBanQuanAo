import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
    const token = "";

    const clonedRequest = request.clone({
      headers: request.headers
        // .set('Authorization', `Bearer ${token}`)
        .set('Accept', `text/plain`)
        .set('Access-Control-Allow-Origin', `*`)
        .set('Access-Control-Allow-Methods', 
          'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        .set('Access-Control-Allow-Headers', 
          'Origin, X-Requested-With, Content-Type, Accept')
        .set('Access-Control-Allow-Credentials', 'true')
    });

    return next.handle(clonedRequest);
  }

  constructor() {}
}
