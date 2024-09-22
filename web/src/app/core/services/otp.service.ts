import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput, throwError } from 'rxjs';

import { IUserValidOtpParams } from '../interfaces/api/parameters/user-valid-otp-params';
import { IUserValidOtpResponse } from '../interfaces/api/response/user-valid-otp-response';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { IUserSendOtpParams } from '../interfaces/api/parameters/user-send-otp-params';
import { IUserSendOtpResponse } from '../interfaces/api/response/user-send-otp-response';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  public sendOtp(params: IUserSendOtpParams): 
    Observable<HttpResponse<IUserSendOtpResponse>> {
    return this.http.post<IUserSendOtpResponse>(
      this.apiConfigToken.sendOtp, params, { observe: 'response' }
    )
      .pipe(catchError(this.errorHandler))
  }

  public validOtp(params: IUserValidOtpParams): 
    Observable<HttpResponse<IUserValidOtpResponse>> {
    return this.http.post<IUserValidOtpResponse>(
      this.apiConfigToken.validOtp, params, { observe: 'response' }
    )
      .pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: HttpErrorResponse): ObservableInput<any> {
    console.log(error);
    return throwError(`Error: ${error.message}`)
  }
  
  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
