import { HttpClient } from '@angular/common/http';
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

  public sendOtp(params: IUserSendOtpParams): Observable<IUserSendOtpResponse> {
    return this.http.post<IUserSendOtpResponse>(
      this.apiConfigToken.sendOtp, params
    )
  }

  public register(params: IUserRegisterParams): Observable<IUserRegisterResponse> {
    return this.http.post<IUserRegisterResponse>(
      this.apiConfigToken.user.register, params
    )
  }
}
