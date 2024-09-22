import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { Observable } from 'rxjs';
import { IUserLoginParams } from '../../../interfaces/api/parameters/user-login-params.interface';
import { IUserLoginResponse } from '../../../interfaces/api/response/user-login-response.interface';
import { IUserRegisterParams } from '../../../interfaces/api/parameters/user-register-params';
import { IUserGetAllResponse } from '../../../interfaces/api/response/user-get-all-response';
import { IUserSendOtpResponse } from '../../../interfaces/api/response/user-send-otp-response';
import { IUserRegisterResponse } from '../../../interfaces/api/response/user-register-response';
import { IUserSendOtpParams } from '../../../interfaces/api/parameters/user-send-otp-params';
import { IUserValidOtpParams } from '../../../interfaces/api/parameters/user-valid-otp-params';
import { IUserValidOtpResponse } from '../../../interfaces/api/response/user-valid-otp-response';
import { IUserChangePasswordParams } from '../../../interfaces/api/parameters/user-change-password-params';
import { IUserChangePasswordResponse } from '../../../interfaces/api/response/user-change-password-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}

  public login(params: IUserLoginParams): Observable<IUserLoginResponse> {
    return this.http.post<IUserLoginResponse>(
      this.apiConfigToken.user.login, params
    )
  }

  public get(): Observable<IUserGetAllResponse> {
    return this.http.get<IUserGetAllResponse>(
      this.apiConfigToken.user.getAll
    )
  }

  public register(params: IUserRegisterParams): Observable<IUserRegisterResponse> {
    return this.http.post<IUserRegisterResponse>(
      this.apiConfigToken.user.register, params
    )
  }

  public sendOtp(params: IUserSendOtpParams): Observable<IUserSendOtpResponse> {
    return this.http.post<IUserSendOtpResponse>(
      this.apiConfigToken.sendOtp, params
    )
  }

  public validOtp(params: IUserValidOtpParams): Observable<IUserValidOtpResponse> {
    return this.http.post<IUserValidOtpResponse>(
      this.apiConfigToken.validOtp, params
    )
  }

  public forgetPassword(params: IUserChangePasswordParams): 
    Observable<IUserChangePasswordResponse> {
    return this.http.post<IUserChangePasswordResponse>(
      this.apiConfigToken.user.forgetPassword, params
    )
  }
}
